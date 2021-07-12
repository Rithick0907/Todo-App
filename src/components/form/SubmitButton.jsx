import { Button } from "react-bootstrap";
import React from "react";
import { Spinner } from "react-bootstrap";
import { useFormikContext } from "formik";

const SubmitButton = ({ title, isLoading, ...otherProps }) => {
  const { isSubmitting } = useFormikContext();
  return (
    <div className="w-75 text-center mt-4">
      <Button type="submit" disabled={isSubmitting} {...otherProps}>
        {isLoading ? <Spinner animation="border" /> : title}
      </Button>
    </div>
  );
};

export default SubmitButton;
