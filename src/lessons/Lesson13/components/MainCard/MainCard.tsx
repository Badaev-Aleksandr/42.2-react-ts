import { useState, createContext } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import { UserData } from "./types";

// Шаг 1. Создаем хранилище - контекст, с помощью функции createContext
//необходимо сделать экспорт, чтобы затем использовать контекст с хуком useContext
export const MainCardContext = createContext<UserData>({
  firstName: "",
  lastName: "",
  age: 0,
});

function MainCard() {
  const [userData, setUserData] = useState<UserData>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    //2 шаг. Создаем обертку, которая позволит получить значение из контекста в любом компоненте,
    //который будет вложен в обертку 
    //В провайдере мы добавляем значение которому нужен доступ(userData)
    <MainCardContext.Provider value={userData}>
    <MainCardWrapper>
      <MainCardTitle>Main Card</MainCardTitle>
      <Section/>
      {/* Пример с props drilling */}
      {/* <Section data={userData} /> */}
    </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;
