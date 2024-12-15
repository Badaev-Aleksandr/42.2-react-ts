import Button from "components/Button/Button";

import {
  ButtonLi,
  ButtonWrapper,
  Lesson10Container,
  ResultLi,
  ResultList,
  ResultWrapper,
  WrapperElement,
} from "./styles";

import { useEffect, useState } from "react";

import axios from "axios";
import { v4 } from "uuid";

function Lesson10() {
  const [facts, setFacts] = useState<string[]>([]);

  const CAT_INFO_URL = " https://catfact.ninja/fact";

  const deleteFact = (index: number) => {
    setFacts((prevFacts) => prevFacts.filter((_, i) => i !== index));
  };

  const resultCatsInfo = facts.map((fact, index) => {
    return (
      <WrapperElement key={v4()}>
        <ResultLi>{fact}</ResultLi>
        <ButtonLi>
          <Button name="Delete" onClick={() => deleteFact(index)} />
        </ButtonLi>
      </WrapperElement>
    );
  });

  const fetchDate = async () => {
    try {
      const respons = await axios.get(CAT_INFO_URL);
      //   setCatInfo(respons.data.fact)
      setFacts((arrayInfo) => [...arrayInfo, respons.data.fact]);
      console.log(respons);
    } catch (error) {
      console.log(error);
    }
  };

  const getMoreInfo = () => {
    fetchDate();
  };

  const allDelete = () => {
    setFacts([]);
  };

  useEffect(() => {
    fetchDate();
  }, []);
  console.log(facts);

  return (
    <Lesson10Container>
      <ButtonWrapper>
        <Button name="GET MORE INFO" onClick={getMoreInfo} />
        <Button name="DELETE ALL DATA" onClick={allDelete} />
      </ButtonWrapper>
      <ResultWrapper>
        <ResultList>{resultCatsInfo}</ResultList>
      </ResultWrapper>
    </Lesson10Container>
  );
}

export default Lesson10;
