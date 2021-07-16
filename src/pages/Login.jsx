import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";
import { Link, useHistory } from "react-router-dom";
import {
  authenticationFailed,
  authenticationPending,
  login,
  loginUser,
  userSelector,
} from "../store/user";
import { useDispatch, useSelector } from "react-redux";

import { FormStyle } from "./styles";
import Notification from "../utils/Notification";
import { apiCallBegan } from "../store/apiActions";
import { loginURL } from "../service/httpConfig";
import { passwordValidation } from "../validate";

// import authenticateUser from "../store/asyncThunk/authenticateUser";
// import { loadingSelector } from "../store/user";

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
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (data, { resetForm }) => {
    await dispatch(loginUser(data));
    history.push("/main");
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
        <SubmitButton title="Login" isLoading={false} />
        <Link className="w-75 text-center mt-3" to="/signup">
          Don't have an account?
        </Link>
      </CustomForm>
    </FormStyle>
  );
};

export default Login;
