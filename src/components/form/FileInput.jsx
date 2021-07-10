import { ErrorMessage, useFormikContext } from "formik";

import { Form } from "react-bootstrap";

const FileInput = ({ name, placeholder, ...otherAttribute }) => {
  const { setFieldValue, handleBlur, errors, touched } = useFormikContext();
  return (
    <>
      <Form.File
        name={name}
        label={placeholder}
        onChange={(e) => setFieldValue(name, e.currentTarget.files[0])}
        onBlur={handleBlur}
        isValid={touched[name] && !errors[name]}
        isInvalid={touched[name] && errors[name]}
        {...otherAttribute}
        custom
      />
      <ErrorMessage className="text-danger mt-1" name={name} component="div" />
    </>
  );
};

export default FileInput;
