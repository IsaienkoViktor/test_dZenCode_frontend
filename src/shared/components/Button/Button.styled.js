import styled from "styled-components";

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
`;
