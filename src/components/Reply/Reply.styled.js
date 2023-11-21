import styled from "styled-components";

export const StyledReply = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  margin-left: ${({ theme, $index }) => theme.spacing(4 * $index)};
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
