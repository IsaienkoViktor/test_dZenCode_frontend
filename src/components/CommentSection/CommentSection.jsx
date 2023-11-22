import PropTypes from "prop-types";
import { useState } from "react";
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

  console.log(data);
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
              <StyledMessage>{data.text}</StyledMessage>
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
          <Captcha/>
        </Modal>
      )}
    </>
  );
};

CommentSection.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    replies: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
  commentId: PropTypes.string,
};
