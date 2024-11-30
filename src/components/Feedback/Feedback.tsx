import Button from "../Button/Button";
import {FeedbackWrapper, ButtonsResultsContainer, Result, ResetButton, ButtonLike, ButtonDislike} from "./styles";
import { useState } from "react";

function Feedback() {
  const [countLike, setCountLike] = useState<number>(0);
  const [countDislike, setCountDislike] = useState<number>(0);

  const onPlusLike = (): void => {
    setCountLike((prevValue) => prevValue + 1);
  };

  const onPlusDislike = (): void => {
    setCountDislike((prevValue) => prevValue + 1);
  };

  const resetResults = (): void => {
    setCountLike(0);
    setCountDislike(0);
  };

  return (
    <FeedbackWrapper>
      <ButtonsResultsContainer>
        <Result>{countLike}</Result>
        <ButtonLike>
          <Button name="Like" onClick={onPlusLike} />
        </ButtonLike>
        <ButtonDislike>
          <Button name="Dislike" onClick={onPlusDislike} />
        </ButtonDislike>
        <Result>{countDislike}</Result>
      </ButtonsResultsContainer>
      <ResetButton>
        <Button name="Reset Results" onClick={resetResults} />
      </ResetButton>
    </FeedbackWrapper>
  );
}

export default Feedback;
