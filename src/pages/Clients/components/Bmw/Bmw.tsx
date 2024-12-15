import Button from "components/Button/Button";

import { BmwImg, BmwPage, ButtonWrapper, ImgTitle } from "./styles";

import bmwImg from "assets/bmw.png";
import { useNavigate } from "react-router-dom";

function Bmw() {
  const navigate = useNavigate();

  const goToClientsPage = () => {
    navigate("/clients");
  };

  return (
    <BmwPage>
      <ButtonWrapper>
        <Button name="Go back" onClick={goToClientsPage}/>
      </ButtonWrapper>
      <ImgTitle>BMW</ImgTitle>
      <BmwImg src={bmwImg} />
    </BmwPage>
  );
}

export default Bmw;
