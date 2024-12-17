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
import Spinner from "components/Spinner/Spinner";

function Lesson10() {
  const [facts, setFacts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>("");

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
    setLoading(true);
    try {
      const respons = await axios.get(CAT_INFO_URL);
      setFacts((arrayInfo) => [...arrayInfo, respons.data.fact]);
      console.log(respons);
    } catch (err) {
      setError("Error: " + err);
      console.log(error);
    } finally {
      setLoading(false);
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

  return (
    <Lesson10Container>
      <ButtonWrapper>
        <Button name="GET MORE INFO" onClick={getMoreInfo} disabled={loading} />
        {facts.length > 0 && (
          <Button name="DELETE ALL DATA" onClick={allDelete} />
        )}
        {loading && <Spinner />}
      </ButtonWrapper>
      <ResultWrapper>
        <ResultList>{resultCatsInfo}</ResultList>
      </ResultWrapper>
    </Lesson10Container>
  );
}

export default Lesson10;
