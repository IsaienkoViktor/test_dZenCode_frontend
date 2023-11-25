import PropTypes from "prop-types";
import { Formik } from "formik";
import { validationSchema } from "../../shared/validation/validationSchema";
import { FormError } from "../../shared/components/FormError/FormError";
import {
  FieldStyled,
  FormStyled,
  StyledDoneIcon,
  StyledInput,
  StyledLabel,
  StyledUploadImg,
  StyledUploadTxt,
} from "./Form.styled";
import { Button } from "../../shared/components/Button/Button";
import { addComment, addReply } from "../../services/api/api";
import { ReplyButton } from "../../shared/components/ReplyButton/ReplyButton";
import { useRef, useState } from "react";
import DOMPurify from "dompurify";
import Captcha from "../Captcha/Captcha";

export const Form = ({ variant, replyToId, commentId, handleModalClose }) => {
  const formikRef = useRef(null);
  const textareaRef = useRef(null);
  const [isCaptchaPassed, setIsCaptchaPassed] = useState(false);

  const initialValues = {
    userName: "",
    email: "",
    comment: "",
    homepage: "",
    image: "",
    textFile: "",
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

  const applyTag = ({ tag, getFieldProps, handleChange }) => {
    const { name } = getFieldProps("comment");
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd, value } = textarea;

    const selectedText = value.substring(selectionStart, selectionEnd);
    const tagText = `<${tag}>${selectedText}</${tag}>`;

    const newValue =
      value.substring(0, selectionStart) +
      tagText +
      value.substring(selectionEnd);

    handleChange({
      target: { name, value: newValue },
    });

    textarea.value = newValue;
  };
  const allowedTags = ["a", "code", "i", "strong"];

  const handleSubmit = (values, { resetForm }) => {
    const { userName, email, comment, homepage, image, textFile } = values;

    console.log(values);

    const sanitizedComment = DOMPurify.sanitize(comment, {
      ALLOWED_TAGS: allowedTags,
    });

    const formData = new FormData();

    if (image) {
      formData.append("image", image);
    }

    if (textFile) {
      formData.append("textFile", textFile);
    }

    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("homepage", homepage);

    if (variant === "reply") {
      formData.append("reply", sanitizedComment);

      addReply({ reply: formData, commentId, replyToId }).catch((error) =>
        console.log(error)
      );
    } else {
      formData.append("text", sanitizedComment);
      addComment(formData).catch((error) => console.log(error));
    }

    resetForm();
    handleModalClose();
  };

  const handleFormSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        innerRef={formikRef}
      >
        {({
          getFieldProps,
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
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
            <ReplyButton
              applyTag={(tag) => applyTag({ tag, getFieldProps, handleChange })}
            />
            <StyledLabel>
              <span>{values.image ? "Reselect" : "Select"} Image</span>
              <StyledUploadImg />
              <StyledInput
                type="file"
                accept="image/png, image/jpeg, image/jpg, image/gif"
                name="image"
                className={getClassName(touched.image, errors.image)}
                onBlur={handleBlur}
                onChange={(event) => {
                  console.log(event);
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              {values.image && <p>{values.image.name}</p>}
              <FormError name="image" touched={touched} errors={errors} />
            </StyledLabel>
            <StyledLabel>
              <span>{values.textFile ? "Reselect" : "Select"} File</span>
              <StyledUploadTxt />
              <StyledInput
                type="file"
                name="textFile"
                accept="text/plain"
                className={getClassName(touched.textFile, errors.textFile)}
                onBlur={handleBlur}
                onChange={(event) => {
                  console.log(event);
                  setFieldValue("textFile", event.currentTarget.files[0]);
                }}
              />
              {values.textFile && <p>{values.textFile.name}</p>}
              <FormError name="textFile" touched={touched} errors={errors} />
            </StyledLabel>
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
              ref={textareaRef}
            />
            <FormError name="comment" touched={touched} errors={errors} />
          </FormStyled>
        )}
      </Formik>
      {isCaptchaPassed ? (
        <StyledDoneIcon />
      ) : (
        <Captcha
          setIsCaptchaPassed={setIsCaptchaPassed}
          isCaptchaPassed={isCaptchaPassed}
        />
      )}
      <Button
        type="button"
        text="Leave comment"
        disabled={!isCaptchaPassed}
        onClick={handleFormSubmit}
      />
    </>
  );
};

Form.propTypes = {
  commentId: PropTypes.string,
  handleModalClose: PropTypes.func,
  replyToId: PropTypes.string,
  variant: PropTypes.string,
};
