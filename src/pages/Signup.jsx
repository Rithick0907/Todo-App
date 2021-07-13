import * as Yup from "yup";

import { CustomForm, FileInput, Input, SubmitButton } from "../components/form";
import { Link, useHistory } from "react-router-dom";
import {
  mobileNumberValidation,
  passwordValidation,
  validateImageFormat,
  validateImageSize,
} from "../validate";
import { useDispatch, useSelector } from "react-redux";

import { FormStyle } from "./styles";
import { authenticateUser } from "../store/asyncThunk/authThunk";
import isError from "../utils/isError";
import { loadingSelector } from "../store/user";

const initialValues = {
  email: "",
  mobileNumber: "",
  photo: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  mobileNumber: Yup.string()
    .required()
    .matches(mobileNumberValidation.regExp, mobileNumberValidation.errorMessage)
    .label("Mobile Number"),
  photo: Yup.mixed()
    .required("Profile Photo must be added")
    .test(
      "type",
      "Following Format only supported: .jpeg,.jpg,.png,.gif",
      (val) => validateImageFormat(val)
    )
    .test("fileSize", "Upload a image below 1 MB", (val) =>
      validateImageSize(val)
    ),
  password: Yup.string()
    .required()
    .matches(passwordValidation.regExp, passwordValidation.errorMessage)
    .label("Password"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
});
const Signup = () => {
  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values, { resetForm }) => {
    const { payload, error } = await dispatch(
      authenticateUser({ data: values, method: "signup" })
    );
    if (payload) {
      history.push("/main");
    } else if (error) {
      isError(error.message);
      resetForm();
    }
  };
  return (
    <FormStyle>
      <CustomForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <h1 className="w-100 text-center">Registration</h1>
        <Input className="mt-4" name="email" placeholder="Email" />
        <Input
          className="mt-4"
          name="mobileNumber"
          placeholder="Mobile Number"
        />
        <FileInput
          className="mt-4"
          name="photo"
          type="file"
          placeholder="Upload Your Photo"
        />
        <Input
          className="mt-4"
          name="password"
          type="password"
          placeholder="Passord"
        />
        <Input
          className="mt-4"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
        <SubmitButton title="Register" isLoading={isLoading} />
        <Link className="w-75 text-center mt-3" to="/login">
          Already have an account?
        </Link>
      </CustomForm>
    </FormStyle>
  );
};

export default Signup;
