import PropTypes from "prop-types";
import { CommentsRow } from "../CommentsRow/CommentsRow";
import {
  StyledBtn,
  StyledDateAscIcon,
  StyledDateDescIcon,
  StyledTHWrapper,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTextAscIcon,
  StyledTextDescIcon,
} from "./CommentsTable.styled";

export const CommentsTable = ({ data, values, setters }) => {
  const handleSortClick = (key) => {
    const otherKeys = Object.keys(setters).filter((k) => k !== key);

    otherKeys.forEach((otherKey) => {
      setters[otherKey](null);
    });

    if (values[key] === "asc") {
      setters[key]("desc");
    } else {
      setters[key]("asc");
    }
  };
  return (
    <StyledTable>
      <StyledTableHead>
        <tr>
          <th>Comment</th>
          <th>
            <StyledTHWrapper>
              <span>User Name</span>
              <StyledBtn
                onClick={() => {
                  handleSortClick("userName");
                }}
              >
                {values.userName ? (
                  values.userName === "asc" ? (
                    <StyledTextDescIcon />
                  ) : (
                    <StyledTextAscIcon />
                  )
                ) : (
                  <StyledTextAscIcon />
                )}
              </StyledBtn>
            </StyledTHWrapper>
          </th>
          <th>
            <StyledTHWrapper>
              <span>Email</span>
              <StyledBtn
                onClick={() => {
                  handleSortClick("email");
                }}
              >
                {values.email ? (
                  values.email === "asc" ? (
                    <StyledTextDescIcon />
                  ) : (
                    <StyledTextAscIcon />
                  )
                ) : (
                  <StyledTextAscIcon />
                )}
              </StyledBtn>
            </StyledTHWrapper>
          </th>
          <th>
            <StyledTHWrapper>
              <span>Date</span>
              <StyledBtn
                onClick={() => {
                  handleSortClick("createdAt");
                }}
              >
                {values.createdAt ? (
                  values.createdAt === "asc" ? (
                    <StyledDateAscIcon />
                  ) : (
                    <StyledDateDescIcon />
                  )
                ) : (
                  <StyledDateDescIcon />
                )}
              </StyledBtn>
            </StyledTHWrapper>
          </th>
        </tr>
      </StyledTableHead>
      <StyledTableBody>
        {data.map((comment) => (
          <CommentsRow comment={comment} key={comment._id} />
        ))}
      </StyledTableBody>
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

  values: PropTypes.shape({
    email: PropTypes.string,
    userName: PropTypes.string,
    createdAt: PropTypes.string,
  }),
  setters: PropTypes.shape({
    setCreatedAt: PropTypes.func,
    setEmail: PropTypes.func,
    setUserName: PropTypes.func,
  }),
};
