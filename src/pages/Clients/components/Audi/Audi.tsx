import Button from "components/Button/Button";

import { AudiImg, AudiPage, ButtonWrapper, ImgTitle } from "./styles";

import audiImg from "assets/audi.png";
import { useNavigate } from "react-router-dom";

function Audi() {
  const navigate = useNavigate();

  const goToClientsPage = () => {
    navigate("/clients");
  };
  return (
    <AudiPage>
      <ButtonWrapper>
        <Button name="Go back" onClick={goToClientsPage} />
      </ButtonWrapper>
      <ImgTitle>Audi</ImgTitle>
      <AudiImg src={audiImg} />
    </AudiPage>
  );
}

export default Audi;
