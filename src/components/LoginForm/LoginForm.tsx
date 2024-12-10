import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.ts";
import { LoginFormWrapper, LoginFormTitel, InputsContainer } from "./styles";
import { LoginFormValue, LOGIN_FORM_NAMES } from "./types";

function LoginForm() {
  //создавать валидационную схему через Yup
  const shema = Yup.object().shape({
    [LOGIN_FORM_NAMES.EMAIL]: Yup.string()
      .required("Field email is required")
      .email("Field has type email")
      .test(
        "Check value length",
        "Max 25 symbols",
        (value) => value.length <= 25
      ),
    [LOGIN_FORM_NAMES.PASSWORD]: Yup.number()
      .required("Field password is required")
      .typeError("Password must be number")
      .test(
        "Check min password lenght",
        "Min 10 symbols",
        (value) => String(value).length >= 10
      )
      .test(
        "Check max password lenght",
        "Max 20 symbol",
        (value) => String(value).length <= 20
      ),
    // .max(150, "Max 150")
    // .min(18, "Min 18"),
  });

  //настройка формы. Сохраняем возвращаемое useFormik значение (обьект) в переменную formik
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_NAMES.EMAIL]: "",
      [LOGIN_FORM_NAMES.PASSWORD]: "",
    } as LoginFormValue,
    //привязка валидационной схемы Yup к формику формы LoginForm
    validationSchema: shema,
    validateOnChange: false,
    onSubmit: (values: LoginFormValue) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <LoginFormWrapper onSubmit={formik.handleSubmit}>
      <LoginFormTitel>Login form</LoginFormTitel>
      <InputsContainer>
        <Input
          name={LOGIN_FORM_NAMES.EMAIL}
          id="email_Id"
          // type="email"
          placeholder="Enter your email"
          label="Email"
          value={formik.values[LOGIN_FORM_NAMES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.EMAIL]}
        />
        <Input
          name={LOGIN_FORM_NAMES.PASSWORD}
          id="password_Id"
          // type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_NAMES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_NAMES.PASSWORD]}
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
