import * as yup from "yup";
import { emailPattern, namePattern } from "../constants/regexp";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailPattern, "Please enter a valid email address")
    .required("required field"),
  userName: yup
    .string()
    .matches(namePattern, "Please enter a valid name using 0-9a-zA-Z")
    .required("required field"),
  comment: yup.string(),
  homepage: yup.string(),
});
