//@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled";

export const LoginFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 590px;
  padding: 60px;
  gap: 30px;
  border: 1px solid #000000;
  border-radius: 4px;
  background: #ffffff;
  font-family: Lato, Geneva, Tahoma, sans-serif;

  &:hover {
    background-color: #f7e8be;
  }
`;

export const LoginFormTitel = styled.h3`
  line-height: 24px;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  font-family: "Lato", sans-serif;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
