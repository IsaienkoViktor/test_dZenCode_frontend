import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 480px;
  padding-left: ${({ theme }) => theme.spacing(5)};
  padding-right: ${({ theme }) => theme.spacing(5)};
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: ${({ theme }) => theme.spacing(10)};
    padding-right: ${({ theme }) => theme.spacing(10)};
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: ${({ theme }) => theme.spacing(20)};
    padding-right: ${({ theme }) => theme.spacing(20)};
  }
`;
