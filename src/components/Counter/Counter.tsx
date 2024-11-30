import Button from "../Button/Button";
import { CounterContainer, CounterResult, ButtonWrapper } from "./styles";
//Шаг 1 - импорт хука useState из react
import { useState } from "react";

function Counter() {
  console.log("Render");

  //Шаг 2 - вызываем хук useState и передаем в него первоначальное состояние (InitialState)
  //Вызываем деструктуризацию массива из двух элементов, который возвращает хук useState
  // const [count, setCount] = useState<number | undefined>(0);
  const [count, setCount] = useState<number>(0);
  //   const result = useState(0);
  //   console.log(result);
  //   const count = result[0];
  //   console.log(count);
  //   const setCount = result[1];
  //   console.log(setCount);

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <CounterContainer>
      <ButtonWrapper>
        <Button name="-" onClick={onMinusClick} />
      </ButtonWrapper>
      <CounterResult>{count}</CounterResult>
      <ButtonWrapper>
        <Button name="+" onClick={onPlusClick} />
      </ButtonWrapper>
    </CounterContainer>
  );
}

export default Counter;
