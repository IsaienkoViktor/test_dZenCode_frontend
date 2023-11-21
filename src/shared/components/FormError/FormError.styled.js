import styled from "styled-components";

export const ErrorText = styled.p`
  width: 100%;

  color: ${({ theme }) => theme.colors.red};
  font-style: italic;
  font-size: ${({ theme }) => theme.fontSizes.xss};
  text-align: center;
`;
