import Button from "../Button/Button";
import Input from "../Input/Input";
import "./styles.css";

function LoginForm() {
  return (
    <form className="loginForm-wrapper">
      <h3>Login form</h3>
      <div className="input-container">
        <Input
          name="userEmail"
          type="email"
          placeholder="Enter your email"
          label="emailId"
          labelName="Email"
        />
        <Input
          name="userPassword"
          type="password"
          placeholder="Enter your password"
          label="passwordId"
          labelName="Password"
        />
      </div>
      <Button buttonName={"Login"} type={"submit"} />
    </form>
  );
}

export default LoginForm;
