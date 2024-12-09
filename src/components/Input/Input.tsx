import { InputProps } from "./types";
import { InputLabelWrapper, Label, InputElement } from "./styles";

function Input({ name, type = "text", placeholder, id, label, required, onChange, value }: InputProps) {
  return (
    <InputLabelWrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <InputElement
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required = {required}
      />
    </InputLabelWrapper>
  );
}

export default Input;
