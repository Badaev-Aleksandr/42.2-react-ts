import styled from "@emotion/styled";
import { css } from "@emotion/react";

const StyledDiv = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 15px;
  padding: 10px;
`;
export const Homework09Wrapper = styled.div`
  ${StyledDiv}
  border: 2px solid;
  border-radius: 6px;
  min-width: 300px;
  max-width: 600px;
  background: #2f77eb;
`;

export const InputContainer = styled.div`
  ${StyledDiv}
`;

export const OutputResponsImg = styled.img`
  width: 300px;
`;
