import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FormStyle } from "./styles";
import { authenticateUser } from "../store/asyncThunk";
import isError from "../utils/isError";
import { loadingSelector } from "../store/user";
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
  const isLoading = useSelector(loadingSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (values, { resetForm }) => {
    const { error, payload } = await dispatch(
      authenticateUser({ data: values, method: "signin" })
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
