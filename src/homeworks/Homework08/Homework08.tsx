import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { BlockOne, BlockTwo, FormWrapper, Homework08Wrapper } from "./styles";

function Homework08() {
  const [inputValueOne, setInputValueOne] = useState<string>("");

  const [inputValueTwo, setInputValueTwo] = useState<string>("");

  const [outputValueOne, setOutputValueOne] = useState<string>("");

  const [outputValueTwo, setOutputValueTwo] = useState<string>("");

  const onChangeInputOne = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValueOne(e.target.value);
  };

  const onChangeInputTwo = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValueTwo(e.target.value);
  };

  const onClickButton = () => {
    setOutputValueOne(inputValueOne);
    setOutputValueTwo(inputValueTwo);
    setInputValueOne("");
    setInputValueTwo("");
    
  };

  return (
    <Homework08Wrapper>
      <FormWrapper>
        <Input
          name="controlledInput"
          placeholder="введите тект"
          onChange={onChangeInputOne}
          value={inputValueOne}
        />
        <Input
          name="controlledInput"
          placeholder="введите тект"
          onChange={onChangeInputTwo}
          value={inputValueTwo}
        />
        <Button name="Send" onClick={onClickButton}/>
      </FormWrapper>
      <BlockOne>{outputValueOne}</BlockOne>
      <BlockTwo>{outputValueTwo}</BlockTwo>
    </Homework08Wrapper>
  );
}

export default Homework08;
