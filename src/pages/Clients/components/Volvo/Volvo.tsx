import GoBack from "components/GoBack/GoBack";

import { VolvoPage, VolvoImg, ImgTitle } from "./styles";

import volvoImg from "assets/volvo.png";

function Volvo() {
  return (
    <VolvoPage>
      <GoBack />
      <ImgTitle>Volvo</ImgTitle>
      <VolvoImg src={volvoImg} alt="Logo" />
    </VolvoPage>
  );
}

export default Volvo;
