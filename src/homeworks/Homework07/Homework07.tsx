import Button from "../../components/Button/Button";
import { Homework07Wrapper } from "./styles";
import { useState } from "react";

function Homework07() {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsDisabled(true);
  };

  return (
    <Homework07Wrapper>
      <Button name="Click On Me"></Button>
      <Button name="Click On Me" onClick={handleClick} disabled={isDisabled}></Button>
    </Homework07Wrapper>
  );
}

export default Homework07;
