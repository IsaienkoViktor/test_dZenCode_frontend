import styled from "styled-components";

import { MdFormatBold } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import { CgFormatItalic } from "react-icons/cg";

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const StyledBoldIcon = styled(MdFormatBold)`
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.grey};
  width: 20px;
  height: 20px;
`;
export const StyledItalicIcon = styled(CgFormatItalic)`
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.grey};
  width: 20px;
  height: 20px;
`;
export const StyledLinkIcon = styled(FiLink)`
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.grey};
  width: 20px;
  height: 20px;
`;
export const StyledCodeIcon = styled(IoIosCode)`
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.grey};
  width: 20px;
  height: 20px;
`;
