import PropTypes from "prop-types";
import { formatDate } from "../../helpers/formatDate";
import { Link } from "react-router-dom";

export const CommentsRow = ({ comment }) => {
  return (
    <tr>
      <td>
        <Link to={`/${comment._id}`}>{comment.text}</Link>
      </td>
      <td>{comment.userName}</td>
      <td>{comment.email}</td>
      <td>{formatDate(comment.createdAt)}</td>
    </tr>
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
