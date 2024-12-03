import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.ts";
import { LoginFormWrapper, LoginFormTitel, InputsContainer } from "./styles";

function LoginForm() {
  return (
    <LoginFormWrapper>
      <LoginFormTitel>Login form</LoginFormTitel>
      <InputsContainer>
        <Input
          name="userEmail"
          id="emailId"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          name="userPassword"
          id="passwordId"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputsContainer>
      <Button name="Login" type="submit" />
    </LoginFormWrapper>
  );
}

export default LoginForm;
