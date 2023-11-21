import PropTypes from "prop-types";
import { Formik } from "formik";
import { validationSchema } from "../../shared/validation/validationSchema";
import { FormError } from "../../shared/components/FormError/FormError";
import { FieldStyled, FormStyled } from "./Form.styled";
import { Button } from "../../shared/components/Button/Button";
import { addComment, addReply } from "../../services/api/api";

export const Form = ({ variant, replyToId, commentId, handleModalClose }) => {
  const initialValues = {
    userName: "",
    email: "",
    comment: "",
    homepage: "",
  };

  const getClassName = (touched, errors) => {
    if (touched && errors) {
      return "error";
    }
    if (touched && !errors) {
      return "success";
    }
    return "";
  };

  const handleSubmit = (value, { resetForm }) => {
    const { userName, email, comment, homepage } = value;

    if (variant === "reply") {
      const reply = { userName, email, reply: comment, homepage };
      addReply({ reply, commentId, replyToId });
    } else {
      addComment({ userName, email, text: comment, homepage })
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
    resetForm();
    handleModalClose();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, values, handleChange, handleBlur }) => (
        <FormStyled autoComplete="off">
          <FieldStyled
            type="text"
            name="userName"
            placeholder="User Name"
            autoComplete="off"
            required
            className={getClassName(touched.userName, errors.userName)}
          />
          <FormError name="userName" touched={touched} errors={errors} />
          <FieldStyled
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            required
            className={getClassName(touched.email, errors.email)}
          />
          <FormError name="email" touched={touched} errors={errors} />
          <FieldStyled
            type="url"
            name="homepage"
            placeholder="Homepage"
            autoComplete="off"
            required
            className={getClassName(touched.homepage, errors.homepage)}
          />
          <FormError name="homepage" touched={touched} errors={errors} />
          <FieldStyled
            as="textarea"
            name="comment"
            placeholder="Enter your comment..."
            required
            value={values.comment}
            onChange={handleChange}
            onBlur={handleBlur}
            className={getClassName(touched.comment, errors.comment)}
            $variant="textarea"
          />
          <FormError name="comment" touched={touched} errors={errors} />
          <Button type="submit" text="Leave comment" onClick={handleSubmit} />
        </FormStyled>
      )}
    </Formik>
  );
};

Form.propTypes = {
  variant: PropTypes.string,
  replyToId: PropTypes.string,
  commentId: PropTypes.string,
  handleModalClose: PropTypes.func,
};
