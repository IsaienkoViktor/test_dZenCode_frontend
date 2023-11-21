import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

export const Backdrop = styled.div`
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
  min-width: 100vw;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const ModalStyled = styled.div`
  min-width: ${({ theme }) => theme.spacing(125)};
  min-height: ${({ theme }) => theme.spacing(71.75)};

  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.spacing(5)};

  display: flex;
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing(3)};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledCloseIcon = styled(IoCloseOutline)`
  width: 20px;
  height: 20px;
`;

export const ButtonCloseModal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
`;
