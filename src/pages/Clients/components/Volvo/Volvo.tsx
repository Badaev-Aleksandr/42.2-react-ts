import Button from "components/Button/Button";

import { VolvoPage, VolvoImg, ButtonWrapper, ImgTitle } from "./styles";

import volvoImg from "assets/volvo.png";
import { useNavigate } from "react-router-dom";

function Volvo() {
  const navigate = useNavigate();

  const goToClientsPage = () => {
    navigate("/clients");
  };
  return (
    <VolvoPage>
      <ButtonWrapper>
        <Button name="Go back" onClick={goToClientsPage}/>
      </ButtonWrapper>
      <ImgTitle>Volvo</ImgTitle>
      <VolvoImg src={volvoImg} alt="Logo" />
    </VolvoPage>
  );
}

export default Volvo;
