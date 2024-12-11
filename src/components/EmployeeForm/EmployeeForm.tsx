import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { useFormik } from "formik";
import * as Yup from "yup";

import { EmployeeFormWrapper } from "./styles";
import { EMPLOYEE_FORM_NAMES, EmployeeFormValue } from "./types";

function EmployeeForm() {
  const schema = Yup.object().shape({
    [EMPLOYEE_FORM_NAMES.FIRST_NAME]: Yup.string()
      .required("Field First Name is required")
      .test(
        "Check value length",
        "Min 2 symbols and Max 50 symbols",

        (value) => value.length >= 2 && value.length <= 50
      ),
    [EMPLOYEE_FORM_NAMES.LAST_NAME]: Yup.string()
      .required("Field Last Name is required")
      .test(
        "Check value length",
        "Max 15 symbol",

        (value) => value.length <= 15
      ),
    [EMPLOYEE_FORM_NAMES.AGE]: Yup.number().test(
      "Check validation age",
      "Min 18 , Max 80 Age!",

      (value) => {
        if (!value) {
          return false;
        }
        return value >= 18 && value <= 80;
      }
    ),
    [EMPLOYEE_FORM_NAMES.POSITION]: Yup.string()
      .required("Field Position is required")
      .test(
        "Check value length",
        "Max 30 symbol",

        (value) => {
          if (!value) {
            return false;
          }
          return value.length <= 30;
        }
      ),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_NAMES.FIRST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.LAST_NAME]: "",
      [EMPLOYEE_FORM_NAMES.AGE]: "",
      [EMPLOYEE_FORM_NAMES.POSITION]: "",
      [EMPLOYEE_FORM_NAMES.TERMS_OF_USE]: false,
    } as EmployeeFormValue,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValue) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <EmployeeFormWrapper onSubmit={() => {}}>
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
      <Input 
      name={EMPLOYEE_FORM_NAMES.TERMS_OF_USE} 
      id="termsOfUse"
      type="checkbox" 
      label="Terms of use"
      />
      
      <Button name="Create" type="submit" />
    </EmployeeFormWrapper>
  );
}

export default EmployeeForm;
