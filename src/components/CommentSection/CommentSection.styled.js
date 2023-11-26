import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";

export const StyledSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledComment = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(7)};
  border: ${({ theme }) => theme.borders.normal};
  border-color: ${({ theme }) => theme.colors.grey};
`;

export const StyledCommentHeader = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.grey};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const StyledUserName = styled.h3``;

export const StyledMessage = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding-left: ${({ theme }) => theme.spacing(4)};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
`;

export const StyledReplyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;

export const StyledReplyBtnIcon = styled(FaCommentDots)`
  width: 25px;
  height: 25px;

  transition: fill ${({ theme }) => theme.transitions.regular};

  &:hover,
  &:focus {
    fill: ${({ theme }) => theme.colors.grey};
  }
`;

export const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
  padding: ${({ theme }) => theme.spacing(4)};
`;
