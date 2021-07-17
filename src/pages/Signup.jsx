import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";
import React, { useEffect } from "react";
import {
  authenticationErrorSelector,
  authenticationLoadingSelector,
  logout,
  registerUser,
} from "../store/user";
import { mobileNumberValidation, passwordValidation } from "../validate";
import { useDispatch, useSelector } from "react-redux";

import { FormStyle } from "./styles";
import { Link } from "react-router-dom";
import Notification from "../utils/Notification";

const initialValues = {
  email: "",
  mobileNumber: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  mobileNumber: Yup.string()
    .required()
    .matches(mobileNumberValidation.regExp, mobileNumberValidation.errorMessage)
    .label("Mobile Number"),
  password: Yup.string()
    .required()
    .matches(passwordValidation.regExp, passwordValidation.errorMessage)
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .label("Confirm Password"),
});
const Signup = () => {
  const isLoading = useSelector(authenticationLoadingSelector);
  const isError = useSelector(authenticationErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    Notification(isError, "error");
    if (isError) dispatch(logout());
  }, [isError, dispatch]);

  const handleSubmit = async (
    { photo, confirmPassword, ...data },
    { resetForm }
  ) => {
    await dispatch(registerUser(data));
    resetForm();
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
