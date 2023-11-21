import styled from "styled-components";

import { FaCommentDots } from "react-icons/fa";

export const StyledReply = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-left: ${({ theme, $index }) => theme.spacing(4 * $index)};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.grey};
`;

export const StyledReplyHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const StyledReplyTo = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 10px;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledReplyMessage = styled.p`
  font-style: italic;
  flex-grow: 1;
  margin-left: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const StyledBottomBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
  padding: 8px 16px;
`;

export const StyledReplyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const StyledReplyBtnIcon = styled(FaCommentDots)`
  width: 20px;
  height: 20px;

  transition: fill ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.grey};
  }
`;
