import PropTypes from "prop-types";
import parse from "html-react-parser";

import { useState } from "react";
import { formatDate } from "../../helpers/formatDate";
import {
  StyledComment,
  StyledCommentHeader,
  StyledCommentWrapper,
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
import { AttachedFiles } from "../AttachedFiles/AttachedFiles";

export const CommentSection = ({ data, commentId, setComment }) => {
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
                {(data.image || data.textFile) && (
                  <AttachedFiles image={data.image} file={data.textFile} />
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
            setComment={setComment}
          />
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
        data: PropTypes.array,
      }),
      mimetype: PropTypes.string,
    }),
    replies: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    textFile: PropTypes.shape({
      buffer: PropTypes.shape({
        data: PropTypes.array,
      }),
      mimetype: PropTypes.string,
      originalname: PropTypes.string,
    }),
    userName: PropTypes.string.isRequired,
  }).isRequired,
  setComment: PropTypes.func,
};
