import PropTypes from "prop-types";
import {
  StyledReply,
  StyledReplyHeader,
  StyledReplyMessage,
  StyledReplyTo,
} from "./reply.styled";
import { formatDate } from "../../helpers/formatDate";

export const Reply = ({ reply, index }) => {
  console.log(index);
  console.log(reply);
  return (
    <StyledReply $index={index + 1}>
      <StyledReplyHeader>
        <h3>{reply.userName}</h3>
        <p>{formatDate(reply.createdAt)}</p>
      </StyledReplyHeader>
      <StyledReplyTo>
        <StyledReplyMessage>{reply.replyTo.text}</StyledReplyMessage>
      </StyledReplyTo>
      <p>{reply.reply}</p>
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
};
