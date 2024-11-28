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
      </div>
      <Button name="Login" type="submit" />
    </form>
  );
}

export default LoginForm;
