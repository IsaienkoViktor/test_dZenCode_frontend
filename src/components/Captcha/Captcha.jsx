import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { getCaptcha, validateCaptcha } from "../../services/api/api";

const Captcha = () => {
  const [captcha, setCaptcha] = useState(null);
  console.log(captcha);

  const fetchCaptcha = () => {
    getCaptcha()
      .then((data) => {
        setCaptcha(data);
      })
      .catch((err) => console.log("Error fetching the CAPTCHA", err));
  };

  useEffect(() => {
    fetchCaptcha();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userCaptcha = { captcha: event.target.captcha.value };
    console.log(userCaptcha);
    validateCaptcha(userCaptcha)
      .then((data) => console.log(data))
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

export default Captcha;
