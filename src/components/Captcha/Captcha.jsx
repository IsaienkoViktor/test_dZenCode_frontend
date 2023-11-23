import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { getCaptcha, validateCaptcha } from "../../services/api/api";

const Captcha = ({ setIsCaptchaPassed }) => {
  const [captcha, setCaptcha] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  const fetchCaptcha = () => {
    getCaptcha()
      .then((data) => {
        setCaptcha(data.captcha);
        setSessionId(data.sessionId);
      })
      .catch((err) => console.log("Error fetching the CAPTCHA", err));
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userCaptcha = event.target.captcha.value;

    validateCaptcha({ captcha: userCaptcha, sessionId })
      .then(() => setIsCaptchaPassed(true))
      .catch((err) => console.log(err));
  };

  const handleRefreshCaptcha = () => {
    fetchCaptcha();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>{captcha && parse(captcha)}</div>
        <input type="text" name="captcha" required />
        <button type="submit">Подтвердить</button>
      </form>
      <button onClick={handleRefreshCaptcha}>Обновить CAPTCHA</button>
    </div>
  );
};

Captcha.propTypes = {
  setIsCaptchaPassed: PropTypes.func,
};

export default Captcha;
