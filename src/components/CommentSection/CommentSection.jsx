import PropTypes from "prop-types";
import { formatDate } from "../../helpers/formatDate";
import {
  StyledComment,
  StyledCommentHeader,
  StyledList,
  StyledMessage,
  StyledSection,
  StyledUserName,
} from "./CommentSection.styled";
import { Reply } from "../Reply/Reply";

export const CommentSection = ({ data }) => {
  console.log(data);
  return (
    <StyledSection>
      {data && (
        <>
          <StyledComment>
            <StyledCommentHeader>
              <StyledUserName>{data.userName}</StyledUserName>
              <p>{formatDate(data.createdAt)}</p>
            </StyledCommentHeader>
            <StyledMessage>{data.text}</StyledMessage>
          </StyledComment>
          <StyledList>
            {data.replies.map((reply, index) => (
              <Reply reply={reply} key={reply._id} index={index} />
            ))}
          </StyledList>
        </>
      )}
    </StyledSection>
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
};
