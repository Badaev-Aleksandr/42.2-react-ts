import { ChangeEvent, useEffect, useState } from "react";

import Input from "components/Input/Input";

import { Homework09Wrapper, InputContainer, OutputResponsImg } from "./styles";
import axios from "axios";

function Homework09() {
  const [firstValue, setFirstValue] = useState<string>("");
  const [secondValue, setSecondValue] = useState<string>("");
  const [imgObject, setImgObject] = useState<string>("");

  const fetchData = async () => {
    try {
      const respons = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      // console.log(respons);
      setImgObject(respons.data.message);
    } catch (err) {
      console.log(err);
      alert("Не удалось загрузить изображение. Попробуйте позже.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [firstValue]);

  const firstValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstValue(event.target.value);
  };

  const secondValueOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondValue(event.target.value);
  };

  return (
    <Homework09Wrapper>
      <InputContainer>
        <Input
          name="example1"
          value={firstValue}
          onChange={firstValueOnChange}
        />
        <Input
          name="example2"
          value={secondValue}
          onChange={secondValueOnChange}
        />
      </InputContainer>
      <OutputResponsImg src={imgObject} />
    </Homework09Wrapper>
  );
}

export default Homework09;
