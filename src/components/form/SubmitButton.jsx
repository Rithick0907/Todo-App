import { Button } from "react-bootstrap";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <div className="w-75 text-center mt-4">
      <Button onClick={handleSubmit} {...otherProps}>
        {title}
      </Button>
    </div>
  );
};

export default SubmitButton;
