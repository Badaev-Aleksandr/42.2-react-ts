import "./styles.css";
import { BoxInfo } from "./styles";

function Lesson07() {
  //----------------------------------------Generic-------------------------------------

  type CustomArrayType<T = string> = (T | undefined)[];

  const colors: CustomArrayType = ["red", "blue", undefined];
  const colorCodes: CustomArrayType<number> = [255, 444, undefined];

  //----------------------------------------Enum----------------------------------------
  enum COLORS {
    Red,
    Black = 10,
    Green,
  }

  let currentColor: COLORS = COLORS.Green;

  console.log(COLORS);

  enum USER_ROLES {
    ADMIN = "Admin",
    USER = "User",
    GUEST = "Guest",
  }

  interface UserData {
    name: string;
    age: number;
    role: USER_ROLES;
  }

  // enum для цветов светофоров
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }

  const getAction = (light: TRAFFIC_LIGHT): string => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Стоп";
      case TRAFFIC_LIGHT.YELLOW:
        return "Внимание";
      case TRAFFIC_LIGHT.GREEN:
        return "Идите";
      default:
        return "Неизвестный сигнал";
    }
  };

  console.log(getAction(TRAFFIC_LIGHT.RED));

//---------------------------------Стилизация компонентов--------------------------
//Inline стили
const textStyles = {
  color: 'blue',
  fontSize: '24px'
}
  return (
    <div className="lesson07-container">
      {/* <div style={{ color: "green" }}>Inline style example 1</div> */}
      <div style={textStyles}>Inline style example 1</div>
      <p style={textStyles}>Inline style example 2</p>
      <BoxInfo primary>Emotion example</BoxInfo>
      <BoxInfo>Emotion example 2</BoxInfo>
    </div>
  );
}

export default Lesson07;
