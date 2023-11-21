import styled from "styled-components";

export const StyledSection = styled.section`
  padding-top: ${({ theme }) => theme.spacing(10)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const StyledComment = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(7)};
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

export const StyledMessage = styled.p``;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)};
`;
