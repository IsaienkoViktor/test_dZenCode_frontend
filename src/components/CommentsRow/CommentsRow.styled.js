import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTableRow = styled.tr`
  td {
    padding: ${({ theme }) => theme.spacing(2.5)};
  }

  td:not(:first-child) {
    text-align: center;
  }
`;

export const StyledLink = styled(Link)`
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.lightBlue};
  }
`;
