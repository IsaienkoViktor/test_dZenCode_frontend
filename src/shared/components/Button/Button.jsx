import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({ text, type = "button", onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
};
