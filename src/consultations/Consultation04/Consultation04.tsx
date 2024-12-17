import LoginForm from "components/LoginForm/LoginForm";
import { ConsultatioContainer } from "./styles";

function Consultation04() {
  interface User {
    readonly name: string; //Пример (readonly) только для чтения изменять нельзя!
    age: number;
  }

  const user: User = { name: "Tom", age: 23 };

  user.age = 24;
//   user.name = "Age";

  return (
    <ConsultatioContainer>
      <LoginForm />
    </ConsultatioContainer>
  );
}

export default Consultation04;
