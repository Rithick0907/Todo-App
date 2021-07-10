import * as Yup from "yup";

import { CustomForm, Input, SubmitButton } from "../components/form";

import { FormStyle } from "./styles";
import { Link } from "react-router-dom";
import firebase from "../service/firebase.utils";
import { passwordValidation } from "../validate";
import { toast } from "react-toastify";

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
  const handleSubmit = async ({ email, password }) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      toast.info("Success");
    } catch (e) {
      toast.error(e.message);
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
        <SubmitButton title="Login" />
        <Link className="w-75 text-center mt-3" to="/signup">
          Don't have an account?
        </Link>
      </CustomForm>
    </FormStyle>
  );
};

export default Login;
