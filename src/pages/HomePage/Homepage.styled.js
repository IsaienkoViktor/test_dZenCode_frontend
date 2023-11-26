import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(5)};
`;
