import { ErrorMessage, useFormikContext } from "formik";

import { Form } from "react-bootstrap";

const Input = ({ name, ...otherAttributes }) => {
  const { errors, touched, values, handleChange, handleBlur } =
    useFormikContext();

  return (
    <>
      <Form.Control
        name={name}
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        isValid={touched[name] && !errors[name]}
        isInvalid={touched[name] && errors[name]}
        {...otherAttributes}
      />
      <ErrorMessage className="text-danger mt-1" name={name} component="div" />
    </>
  );
};

export default Input;
