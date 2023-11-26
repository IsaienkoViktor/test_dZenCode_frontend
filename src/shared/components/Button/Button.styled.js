import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.radii.xs};
  padding: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.white};

  transition: transform ${({ theme }) => theme.transitions.regular};

  box-shadow: ${({ theme }) => theme.shadows.secondary};

  &:hover,
  &:focus {
    transform: scale(1.03);
  }

  &:disabled {
    opacity: 0.3;
    &:hover,
    &:focus {
      transform: scale(1);
    }
  }

  ${({ $variant }) =>
    $variant === "preview" &&
    css`
      margin-bottom: ${({ theme }) => theme.spacing(3)};
      border: ${({ theme }) => theme.borders.normal};
      border-color: ${({ theme }) => theme.colors.green};
      color: ${({ theme }) => theme.colors.green};
      background-color: transparent;

      &:disabled {
        opacity: 0.5;
        &:hover,
        &:focus {
          transform: scale(1);
        }
      }
    `};
`;
