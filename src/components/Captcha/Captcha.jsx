import parse from "html-react-parser";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCaptcha, validateCaptcha } from "../../services/api/api";
import {
  StyledCaptchaInput,
  StyledCaptchaForm,
  StyledCaptchaWrapper,
  StyledRefreshIcon,
  StyledConfirmBtnIcon,
  StyledCaptchaBtn,
} from "./Captcha.styled";

const Captcha = ({ setIsCaptchaPassed, isCaptchaPassed }) => {
  const [captcha, setCaptcha] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [isCaptchaError, setIsCaptchaError] = useState(false);

  const fetchCaptcha = () => {
    getCaptcha()
      .then((data) => {
        setCaptcha(data.captcha);
        setSessionId(data.sessionId);
      })
      .catch((err) => console.error("Error fetching the CAPTCHA", err));
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userCaptcha = event.target.captcha.value;

    validateCaptcha({ captcha: userCaptcha, sessionId })
      .then(() => {
        setIsCaptchaError(false);
        setIsCaptchaPassed(true);
      })
      .catch((err) => {
        setIsCaptchaError(true);
        setIsCaptchaPassed(false);
        console.error(err);
      });
  };

  const handleRefreshCaptcha = () => {
    fetchCaptcha();
    setIsCaptchaError(false);
  };

  return (
    <StyledCaptchaWrapper>
      <StyledCaptchaForm onSubmit={handleSubmit}>
        <div>{captcha && parse(captcha)}</div>
        <StyledCaptchaInput type="text" name="captcha" required />
        <button type="submit">
          {isCaptchaPassed ? (
            <StyledConfirmBtnIcon style={{ fill: "green" }} />
          ) : isCaptchaError ? (
            <StyledConfirmBtnIcon style={{ fill: "red" }} />
          ) : (
            <StyledConfirmBtnIcon />
          )}
        </button>
        <StyledCaptchaBtn type="button" onClick={handleRefreshCaptcha}>
          <StyledRefreshIcon />
        </StyledCaptchaBtn>
      </StyledCaptchaForm>
    </StyledCaptchaWrapper>
  );
};

Captcha.propTypes = {
  isCaptchaPassed: PropTypes.bool,
  setIsCaptchaPassed: PropTypes.func,
};

export default Captcha;
