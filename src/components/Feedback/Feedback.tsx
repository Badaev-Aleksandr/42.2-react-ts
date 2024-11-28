import Button from "../Button/Button";
import "./styles.css";
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
    <div className="feedback-wrapper">
      <div className="buttons-results-container">
        <div className="result">{countLike}</div>
        <div className="button-like">
          <Button name="Like" onClick={onPlusLike} />
        </div>
        <div className="button-dislike">
          <Button name="Dislike" onClick={onPlusDislike} />
        </div>
        <div className="result">{countDislike}</div>
      </div>
      <div className="reset-button">
        <Button name="Reset Results" onClick={resetResults} />
      </div>
    </div>
  );
}

export default Feedback;
