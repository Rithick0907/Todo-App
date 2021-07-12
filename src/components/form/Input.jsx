import { ErrorMessage, useField } from "formik";

import { Form } from "react-bootstrap";

const Input = ({ name, ...otherAttributes }) => {
  const [field, meta] = useField(name);
  const { error, touched } = meta;

  return (
    <>
      <Form.Control
        isValid={touched && !error}
        isInvalid={touched && error}
        {...field}
        {...otherAttributes}
      />
      <ErrorMessage className="text-danger mt-1" name={name} component="div" />
    </>
  );
};

export default Input;
