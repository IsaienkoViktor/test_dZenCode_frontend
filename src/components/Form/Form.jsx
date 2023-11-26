import { useRef, useState } from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { Formik } from "formik";
import { validationSchema } from "../../shared/validation/validationSchema";
import { FormError } from "../../shared/components/FormError/FormError";
import Captcha from "../Captcha/Captcha";
import { Button } from "../../shared/components/Button/Button";
import {
  addComment,
  addReply,
  getAllComments,
  getCommentById,
} from "../../services/api/api";
import { ReplyButton } from "../../shared/components/ReplyButton/ReplyButton";

import {
  FieldStyled,
  FormStyled,
  StyledDoneIcon,
  StyledInput,
  StyledLabel,
  StyledPreviewText,
  StyledPreviewTitle,
  StyledPreviewWrapper,
  StyledUploadImg,
  StyledUploadTxt,
} from "./Form.styled";
import { allowedTags } from "../../shared/constants/regexp";

export const Form = ({
  variant,
  replyToId,
  commentId,
  handleModalClose,
  setComments,
  setTotal,
  setComment,
  page,
}) => {
  const formikRef = useRef(null);
  const textareaRef = useRef(null);
  const [isCaptchaPassed, setIsCaptchaPassed] = useState(false);
  const [commentPreview, setCommentPreview] = useState("");

  const initialValues = {
    userName: "",
    email: "",
    comment: "",
    homepage: "",
    image: "",
    textFile: "",
  };

  const validateAndSanitizeComment = (comment) => {
    const cleanComment = DOMPurify.sanitize(comment, {
      ALLOWED_TAGS: ["a", "code", "i", "strong"],
      ALLOWED_ATTR: ["href", "title"],
    });

    return cleanComment;
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

  const handleSubmit = (values, { resetForm }) => {
    const { userName, email, comment, homepage, image, textFile } = values;

    const checkedSanitizedComment = validateAndSanitizeComment(comment);

    if (checkedSanitizedComment !== comment) {
      alert("Your comment contains invalid or not allowed HTML tags.");
      return;
    }

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

      addReply({ reply: formData, commentId, replyToId })
        .then(() =>
          getCommentById(commentId)
            .then((data) => {
              setComment(data);
              resetForm();
              handleModalClose();
            })
            .catch((error) => console.log(error))
        )
        .catch((error) => console.log(error));
    } else {
      formData.append("text", sanitizedComment);
      addComment(formData)
        .then(() =>
          getAllComments({ page, limit: 25 })
            .then((data) => {
              setComments(data.data);
              setTotal(data.total);
              resetForm();
              handleModalClose();
            })
            .catch((error) => console.log(error))
        )
        .catch((error) => console.log(error));
    }
  };

  const handleFormSubmit = () => {
    if (formikRef.current) {
      formikRef.current.submitForm();
    }
  };

  const handlePreview = () => {
    const currentComment = formikRef.current.values.comment;

    const previewHtml = validateAndSanitizeComment(currentComment);
    setCommentPreview(previewHtml);
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
      {commentPreview && (
        <StyledPreviewWrapper>
          <StyledPreviewTitle>Preview:</StyledPreviewTitle>
          <StyledPreviewText>{parse(commentPreview)}</StyledPreviewText>
        </StyledPreviewWrapper>
      )}
      <Button
        type="button"
        text="Preview comment"
        disabled={!isCaptchaPassed}
        variant="preview"
        onClick={handlePreview}
      />
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
  page: PropTypes.number,
  replyToId: PropTypes.string,
  setComment: PropTypes.func,
  setComments: PropTypes.func,
  setTotal: PropTypes.func,
  variant: PropTypes.string,
};
