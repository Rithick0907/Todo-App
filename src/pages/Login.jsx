import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";
import React, { useEffect } from "react";
import {
  authenticationErrorSelector,
  authenticationLoadingSelector,
  loginUser,
  logout,
} from "../store/user";
import { useDispatch, useSelector } from "react-redux";

import { FormStyle } from "./styles";
import { Link } from "react-router-dom";
import Notification from "../utils/Notification";
import { passwordValidation } from "../validate";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string()
    .required()
    .matches(passwordValidation.regExp, passwordValidation.errorMessage)
    .label("Password"),
});

const Login = () => {
  const isLoading = useSelector(authenticationLoadingSelector);
  const isError = useSelector(authenticationErrorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    Notification(isError, "error");
    if (isError) dispatch(logout());
  }, [isError, dispatch]);

  const handleSubmit = async (data, { resetForm }) => {
    await dispatch(loginUser(data));
    resetForm();
  };

  return (
    <FormStyle>
      <CustomForm
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <h1 className="w-100 text-center">Login</h1>
        <Input name="email" className="mt-4" placeholder="Email" />
        <Input
          name="password"
          type="password"
          className="mt-4"
          placeholder="Password"
        />
        <SubmitButton title="Login" isLoading={isLoading} />
        <Link className="w-75 text-center mt-3" to="/signup">
          Don't have an account?
        </Link>
      </CustomForm>
    </FormStyle>
  );
};

export default Login;
