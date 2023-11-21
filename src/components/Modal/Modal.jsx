import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  Backdrop,
  ButtonCloseModal,
  ModalStyled,
  StyledCloseIcon,
} from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

export const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
      document.body.style.overflow = "auto";
    }
  };

  const handleCloseModal = () => {
    onClose();
    document.body.style.overflow = "auto";
  };

  return createPortal(
    <Backdrop onClick={handleClickBackdrop}>
      <ModalStyled>
        <ButtonCloseModal aria-label="close modal" onClick={handleCloseModal}>
          <StyledCloseIcon />
        </ButtonCloseModal>
        {children}
      </ModalStyled>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};
