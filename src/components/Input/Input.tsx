import "./styles.css";
import { InputProps } from "./types";
import { InputLabelWrapper, Label, InputElement } from "./styles";

function Input({ name, type = "text", placeholder, id, label }: InputProps) {
  return (
    <InputLabelWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        required
      />
    </InputLabelWrapper>
  );
}

export default Input;
