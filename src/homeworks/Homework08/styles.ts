import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px solid;
  border-radius: 6px;
  padding: 10px;

`;

export const Homework08Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;

export const BlockOne = styled.div`
  ${StyledDiv}
  font-size: 24px;
  width: 200px;
  color: #3cff00;
  background: #324a78;
`;

export const BlockTwo = styled.div`
  ${StyledDiv}
  font-size: 24px;
  width: 200px;
  color: #fc000d;
  background: #324a78;
`;

export const FormWrapper = styled.form`
${StyledDiv}
gap: 25px;
background: #22d1e0;
`;

