import { Form } from "formik";
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
    {() => <Form>{children}</Form>}
  </Formik>
);

export default CustomForm;
