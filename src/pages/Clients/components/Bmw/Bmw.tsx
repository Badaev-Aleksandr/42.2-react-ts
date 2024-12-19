import { BmwImg, BmwPage, ImgTitle } from "./styles";

import bmwImg from "assets/bmw.png";
import GoBack from "components/GoBack/GoBack";

function Bmw() {
  return (
    <BmwPage>
      <GoBack />
      <ImgTitle>BMW</ImgTitle>
      <BmwImg src={bmwImg} />
    </BmwPage>
  );
}

export default Bmw;
