import PropTypes from "prop-types";
import parse from "html-react-parser";
import {
  StyledBottomBar,
  StyledReply,
  StyledReplyBtn,
  StyledReplyBtnIcon,
  StyledReplyHeader,
  StyledReplyMessage,
  StyledReplyTo,
} from "./Reply.styled";
import { formatDate } from "../../helpers/formatDate";
import { AttachedFiles } from "../AttachedFiles/AttachedFiles";

export const Reply = ({ reply, index, handleModalOpen }) => {
  return (
    <StyledReply $index={index + 1}>
      <StyledReplyHeader>
        <h3>{reply.userName}</h3>
        <p>{formatDate(reply.createdAt)}</p>
      </StyledReplyHeader>
      <StyledBottomBar>
        <StyledReplyTo>
          <StyledReplyMessage>{parse(reply.replyTo.text)}</StyledReplyMessage>        </StyledReplyTo>
        <p>{parse(reply.reply)}</p>
        {(reply.image || reply.textFile) && (
          <AttachedFiles image={reply.image} file={reply.textFile} />
        )}
        <StyledReplyBtn onClick={() => handleModalOpen(reply._id)}>
          <StyledReplyBtnIcon />
        </StyledReplyBtn>
      </StyledBottomBar>
    </StyledReply>
  );
};

Reply.propTypes = {
  handleModalOpen: PropTypes.func,
  index: PropTypes.number.isRequired,
  reply: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    image: PropTypes.shape({
      buffer: PropTypes.shape({
        data: PropTypes.array,
      }),
      mimetype: PropTypes.string,
    }),
    mainCommentId: PropTypes.string.isRequired,
    reply: PropTypes.string.isRequired,
    replyTo: PropTypes.shape({
      _id: PropTypes.string,
      text: PropTypes.string.isRequired,
    }).isRequired,
    textFile: PropTypes.shape({
      buffer: PropTypes.shape({
        data: PropTypes.array,
      }),
      mimetype: PropTypes.string,
      originalname: PropTypes.string,
    }),
    userName: PropTypes.string.isRequired,
  }),
};
