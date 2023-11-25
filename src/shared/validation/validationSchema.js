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
  image: yup
    .mixed()
    .test("fileType", "Unsupported Image Format", function (value) {
      if (this.parent.image) {
        return (
          value &&
          (value.name.endsWith(".png") ||
            value.name.endsWith(".jpg") ||
            value.name.endsWith(".gif") ||
            value.name.endsWith(".jpeg"))
        );
      }
      return true;
    }),
  textFile: yup
    .mixed()
    .test("fileType", "Unsupported File Format", function (value) {
      if (this.parent.textFile) {
        return value && value.name.endsWith(".txt");
      }
      return true;
    }),
});
