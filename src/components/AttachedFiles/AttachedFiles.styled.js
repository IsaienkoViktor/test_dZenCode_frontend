import styled, { css } from "styled-components";

export const StyledAttachedFiles = styled.div``;

export const StyledImg = styled.img`
  width: 150px;
  cursor: zoom-in;
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  ${({ $variant }) =>
    $variant === "modal" &&
    css`
      width: 100%;
      cursor: auto;
    `};
`;

export const StyledFile = styled.a`
  display: inline-block;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.lightBlue};

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightBlue};
    transition: width ${({ theme }) => theme.transitions.regular};
  }

  &:hover::after,
  &:focus::after {
    width: 100%;
  }
`;