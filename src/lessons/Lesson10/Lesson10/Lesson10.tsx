import Button from "components/Button/Button";
import {
  ButtonWrapper,
  Lesson10Container,
  ResultLi,
  ResultList,
  ResultWrapper,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

function Lesson10() {
  const [catInfo, setCatInfo] = useState<string>("");

  const CAT_INFO_URL = " https://catfact.ninja/fact";

  const fetchDate = async () => {
    try {
      const respons = await axios.get(CAT_INFO_URL);
      setCatInfo(respons.data.fact)
      console.log(respons);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <Lesson10Container>
      <ButtonWrapper>
        <Button name="GET MORE INFO" />
        <Button name="DELETE ALL DATA" />
      </ButtonWrapper>
      <ResultWrapper>
        <ResultList>
          <ResultLi></ResultLi>
        </ResultList>
      </ResultWrapper>
    </Lesson10Container>
  );
}

export default Lesson10;
