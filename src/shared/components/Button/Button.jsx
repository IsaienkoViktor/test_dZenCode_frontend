import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

export const Button = ({
  text,
  type = "button",
  onClick,
  disabled = false,
  variant,
}) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      $variant={variant}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  variant: PropTypes.string,
};
