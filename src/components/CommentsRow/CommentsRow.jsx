import PropTypes from "prop-types";
import { formatDate } from "../../helpers/formatDate";
import { StyledLink, StyledTableRow } from "./CommentsRow.styled";

export const CommentsRow = ({ comment }) => {
  return (
    <StyledTableRow>
      <td>
        <StyledLink to={`/${comment._id}`}>{comment.text}</StyledLink>
      </td>
      <td>{comment.userName}</td>
      <td>{comment.email}</td>
      <td>{formatDate(comment.createdAt)}</td>
    </StyledTableRow>
  );
};

CommentsRow.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    replies: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
  }).isRequired,
};
