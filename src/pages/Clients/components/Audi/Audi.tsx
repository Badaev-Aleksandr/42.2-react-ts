import { AudiImg, AudiPage, ImgTitle } from "./styles";

import audiImg from "assets/audi.png";

import GoBack from "components/GoBack/GoBack";

function Audi() {
  return (
    <AudiPage>
      <GoBack />
      <ImgTitle>Audi</ImgTitle>
      <AudiImg src={audiImg} />
    </AudiPage>
  );
}

export default Audi;
