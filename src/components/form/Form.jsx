import { Formik } from "formik";

const CustomForm = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {() => <div className="custom-form">{children}</div>}
  </Formik>
);

export default CustomForm;
