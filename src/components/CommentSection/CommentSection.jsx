import PropTypes from "prop-types";
import parse from "html-react-parser";
import { Buffer } from "buffer";

import { useEffect, useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import {
  StyledComment,
  StyledCommentHeader,
  StyledList,
  StyledMessage,
  StyledReplyBtn,
  StyledReplyBtnIcon,
  StyledSection,
  StyledUserName,
} from "./CommentSection.styled";
import { Reply } from "../Reply/Reply";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import Captcha from "../Captcha/Captcha";

export const CommentSection = ({ data, commentId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyToId, setReplyToId] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    if (data.image) {
      const buffer = Buffer.from(data.image.buffer.data);
      const image = `data:${data.image.mimetype};base64,${buffer.toString(
        "base64"
      )}`;
      setImageSrc(image);
    }
  }, [data.image]);

  const handleModalOpen = (id) => {
    document.body.style.overflow = "hidden";
    setReplyToId(id);
    setIsModalOpen((prev) => !prev);
  };

  const handleModalClose = () => {
    setReplyToId("");
    setIsModalOpen((prev) => !prev);
    document.body.style.overflow = "auto";
  };

  console.log(data.image);
  return (
    <>
      <StyledSection>
        {data && (
          <>
            <StyledComment>
              <StyledCommentHeader>
                <StyledUserName>{data.userName}</StyledUserName>
                <p>{formatDate(data.createdAt)}</p>
              </StyledCommentHeader>
              <StyledMessage>{parse(data.text)}</StyledMessage>
              {imageSrc && <img src={imageSrc} alt={data.text} />}
              <StyledReplyBtn onClick={() => handleModalOpen(data._id)}>
                <StyledReplyBtnIcon />
              </StyledReplyBtn>
            </StyledComment>
            <StyledList>
              {data.replies.map((reply, index) => (
                <Reply
                  reply={reply}
                  key={reply._id}
                  index={index}
                  handleModalOpen={handleModalOpen}
                />
              ))}
            </StyledList>
          </>
        )}
      </StyledSection>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <Form
            variant="reply"
            replyToId={replyToId}
            commentId={commentId}
            handleModalClose={handleModalClose}
          />
          <Captcha />
        </Modal>
      )}
    </>
  );
};

CommentSection.propTypes = {
  commentId: PropTypes.string,
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.shape({
      buffer: PropTypes.shape({
        data: PropTypes.any,
      }),
      mimetype: PropTypes.any,
    }),
    replies: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
};
