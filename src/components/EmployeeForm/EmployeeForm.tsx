import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormWrapper } from "./styles";
import { EMPLOYEE_FORM_NAMES, EmployeeFormValue } from "./types";
import Checkbox from "components/Checkbox/Checkbox";

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required("Field First Name is required")
      .test(
        "Check value length",
        "Min 2 symbols",

        (value) => value.length >= 2
      )
      .test(
        "Check value length",
        "Max 50 symbols",

        (value) => value.length <= 50
      ),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required("Field Last Name is required")
      .test(
        "Check value length",
        "Max 15 symbol",

        (value) => value.length <= 15
      ),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number()
      .typeError("Age must be nummber")
      .min(18, "Min 18 old age")          // <---------------------------------------------ТУТ
      .max(80, "Max 80 old age"),
    [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
      .required("Field Position is required")
      .test(
        "Check value length",
        "Max 30 symbol",

        (value) => value.length <= 30
      ),
    [EMPLOYEE_FORM_NAMES.IS_AGREE]: Yup.boolean().oneOf(
      [true],
      "Your must accept the terms"
    ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.POSITION]: "",
      [EMPLOYEE_FORM_NAMES.IS_AGREE]: false,
    } as EmployeeFormValue,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValue) => {
      console.log(values);
    },
  });

  console.log(formik);

  const formClear = () => {
    if (
      formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME] &&
      formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME] &&
      formik.values[EMPLOYEE_FORM_NAMES.POSITION] &&
      formik.values[EMPLOYEE_FORM_NAMES.IS_AGREE]
    ) {
      formik.resetForm();
    }
  };

  return (
    <EmployeeFormWrapper onSubmit={formik.handleSubmit}>
      <Input
        name={EMPLOYEE_FORM_NAMES.FIRST_NAME}
        id="firstName"
        placeholder="Enter your First Name"
        label="First Name"
        value={formik.values[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.FIRST_NAME]}
      />
      <Input
        name={EMPLOYEE_FORM_NAMES.LAST_NAME}
        id="lastName"
        placeholder="Enter your Last Name"
        label="Last Name"
        value={formik.values[EMPLOYEE_FORM_NAMES.LAST_NAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.LAST_NAME]}
      />
      <Input
        name={EMPLOYEE_FORM_NAMES.AGE}
        id="age"
        placeholder="Enter your Age"
        label="Age"
        value={formik.values[EMPLOYEE_FORM_NAMES.AGE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.AGE]}
      />
      <Input
        name={EMPLOYEE_FORM_NAMES.POSITION}
        id="position"
        placeholder="Enter your Position"
        label="Position"
        value={formik.values[EMPLOYEE_FORM_NAMES.POSITION]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.POSITION]}
      />
      <Checkbox
        name={EMPLOYEE_FORM_NAMES.IS_AGREE}
        id="agree"
        label="I Agree"
        value={EMPLOYEE_FORM_NAMES.IS_AGREE}
        checked={formik.values[EMPLOYEE_FORM_NAMES.IS_AGREE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_NAMES.IS_AGREE]}
      />
      <Button
        name="Create"
        type="submit"
        onClick={formClear}
        disabled={!formik.values[EMPLOYEE_FORM_NAMES.IS_AGREE]}
      />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
