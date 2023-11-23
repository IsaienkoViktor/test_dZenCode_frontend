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

export const Reply = ({ reply, index, handleModalOpen }) => {
  return (
    <StyledReply $index={index + 1}>
      <StyledReplyHeader>
        <h3>{reply.userName}</h3>
        <p>{formatDate(reply.createdAt)}</p>
      </StyledReplyHeader>
      <StyledBottomBar>
        <StyledReplyTo>
          <StyledReplyMessage>{parse(reply.replyTo.text)}</StyledReplyMessage>
        </StyledReplyTo>
        <p>{parse(reply.reply)}</p>
        <StyledReplyBtn onClick={() => handleModalOpen(reply._id)}>
          <StyledReplyBtnIcon />
        </StyledReplyBtn>
      </StyledBottomBar>
    </StyledReply>
  );
};

Reply.propTypes = {
  reply: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    reply: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    replyTo: PropTypes.shape({
      _id: PropTypes.string,
      text: PropTypes.string.isRequired,
    }).isRequired,
    mainCommentId: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
  handleModalOpen: PropTypes.func,
};
