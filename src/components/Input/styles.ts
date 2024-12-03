import styled from "@emotion/styled";

export const InputLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #6f6f6f;
`;

export const InputElement = styled.input`
  padding: 12px;
  gap: 10px;
  border: 1px solid #3f3f3f;
  border-radius: 4px;
  background: #ffffff;

  &::placeholder {
    opacity: 40%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #1e1e1e;
  }
`;
