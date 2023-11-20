import PropTypes from "prop-types";
import { CommentsRow } from "../CommentsRow/CommentsRow";
import { StyledTable, StyledTableHead } from "./CommentsTable.styled";

export const CommentsTable = ({ data }) => {
  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          <th>Comment</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Date</th>
        </tr>
      </StyledTableHead>
      <tbody>
        {data.map((comment) => (
          <CommentsRow comment={comment} key={comment._id} />
        ))}
      </tbody>
    </StyledTable>
  );
};

CommentsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      replies: PropTypes.array.isRequired,
      text: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
    }).isRequired
  ),
};
