import PropTypes from "prop-types";
import parse from "html-react-parser";
import { Buffer } from "buffer";

import { useEffect, useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import {
  StyledAttachedFiles,
  StyledComment,
  StyledCommentHeader,
  StyledCommentWrapper,
  StyledFile,
  StyledImg,
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

export const CommentSection = ({ data, commentId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyToId, setReplyToId] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [textFile, setTextFile] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    if (data.image) {
      const buffer = Buffer.from(data.image.buffer.data);
      const image = `data:${data.image.mimetype};base64,${buffer.toString(
        "base64"
      )}`;
      setImageSrc(image);
    }

    if (data.textFile) {
      const textFileBuffer = Buffer.from(data.textFile.buffer.data);
      const textFile = `data:${
        data.textFile.mimetype
      };base64,${textFileBuffer.toString("base64")}`;
      setTextFile(textFile);
    }
  }, [data.image, data.textFile]);

  const handleImageModalOpen = () => {
    document.body.style.overflow = "hidden";
    setIsImageModalOpen((prev) => !prev);
  };

  const handleImageModalClose = () => {
    document.body.style.overflow = "auto";
    setIsImageModalOpen((prev) => !prev);
  };

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
              <StyledCommentWrapper>
                <StyledMessage>{parse(data.text)}</StyledMessage>
                {(imageSrc || textFile) && (
                  <StyledAttachedFiles>
                    {imageSrc && (
                      <StyledImg
                        onClick={handleImageModalOpen}
                        src={imageSrc}
                        alt={data.text}
                      />
                    )}
                    {textFile && (
                      <StyledFile href={textFile} download>
                        {data.textFile.originalname}
                      </StyledFile>
                    )}
                  </StyledAttachedFiles>
                )}
                <StyledReplyBtn onClick={() => handleModalOpen(data._id)}>
                  <StyledReplyBtnIcon />
                </StyledReplyBtn>
              </StyledCommentWrapper>
            </StyledComment>
            <StyledList>
              {data.replies.map((reply, index) => (
                <Reply
                  reply={reply}
                  imageSrc={imageSrc}
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
        </Modal>
      )}
      {isImageModalOpen && (
        <Modal onClose={handleImageModalClose} variant="image">
          <StyledImg src={imageSrc} alt={data.text} $variant="modal" />
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
    textFile: PropTypes.shape({
      buffer: PropTypes.shape({
        data: PropTypes.any,
      }),
      mimetype: PropTypes.any,
      originalname: PropTypes.any,
    }),
    userName: PropTypes.string.isRequired,
  }).isRequired,
};
