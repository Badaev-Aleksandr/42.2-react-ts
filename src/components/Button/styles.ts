import styled from "@emotion/styled";

interface MainButtonProps {
  disabled: boolean;
}

export const MainButton = styled.button<MainButtonProps>`
  width: 100%;
  padding: 15px;
  border-radius: 4px;
  border: none;
  outline: none;
  gap: 10px;
  background-color: ${({ disabled }) => (disabled ? "#adacb0" : "#1f27f5")};
  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  color: #ffffff;
  line-height: 30px;
  cursor: pointer;
  box-shadow: 0 5px #666;
  transition: all 0.1s ease-in-out;

  &:active {
    box-shadow: 0 2px #666;
    transform: translateY(3px);
  }
`;
