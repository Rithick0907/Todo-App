import { Button } from "react-bootstrap";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, ...otherProps }) => {
  const { isSubmitting } = useFormikContext();
  return (
    <div className="w-75 text-center mt-4">
      <Button type="submit" disabled={isSubmitting} {...otherProps}>
        {title}
      </Button>
    </div>
  );
};

export default SubmitButton;
