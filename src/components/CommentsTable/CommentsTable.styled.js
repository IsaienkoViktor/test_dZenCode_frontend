import styled from "styled-components";
import { LiaSortAlphaDownSolid } from "react-icons/lia";
import { LiaSortAmountDownSolid } from "react-icons/lia";
import { LiaSortAlphaUpAltSolid } from "react-icons/lia";
import { LiaSortAmountUpAltSolid } from "react-icons/lia";

export const StyledTable = styled.table`
  border-collapse: collapse;
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.green};
`;

export const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.green};

  th {
    padding: ${({ theme }) => theme.spacing(4)};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const StyledTableBody = styled.tbody`
  background-color: ${({ theme }) => theme.colors.white};

  td {
    border: ${({ theme }) => theme.borders.normal};
    border-color: ${({ theme }) => theme.colors.green};
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: fill ${({ theme }) => theme.transitions.regular};
  }

  &:hover,
  &:focus {
    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const StyledTHWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const StyledTextAscIcon = styled(LiaSortAlphaDownSolid)`
  width: 20px;
  height: 20px;
`;

export const StyledDateDescIcon = styled(LiaSortAmountDownSolid)`
  width: 20px;
  height: 20px;
`;

export const StyledTextDescIcon = styled(LiaSortAlphaUpAltSolid)`
  width: 20px;
  height: 20px;
`;

export const StyledDateAscIcon = styled(LiaSortAmountUpAltSolid)`
  width: 20px;
  height: 20px;
`;
