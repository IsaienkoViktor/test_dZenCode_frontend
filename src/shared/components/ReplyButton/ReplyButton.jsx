import PropTypes from "prop-types";
import {
  StyledBoldIcon,
  StyledButtonWrapper,
  StyledCodeIcon,
  StyledItalicIcon,
  StyledLinkIcon,
} from "./ReplyButton.styled";

export const ReplyButton = ({ applyTag }) => {
  return (
    <StyledButtonWrapper>
      <button type="button" onClick={() => applyTag("strong")}>
        <StyledBoldIcon />
      </button>
      <button type="button" onClick={() => applyTag("i")}>
        <StyledItalicIcon />
      </button>
      <button type="button" onClick={() => applyTag('a href="" title=""')}>
        <StyledLinkIcon />
      </button>
      <button type="button" onClick={() => applyTag("code")}>
        <StyledCodeIcon />
      </button>
    </StyledButtonWrapper>
  );
};

ReplyButton.propTypes = {
  applyTag: PropTypes.func.isRequired,
};
