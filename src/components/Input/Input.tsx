import "./styles.css";
import { InputProps } from "./types";

function Input({ name, type, placeholder, id, labelName }: InputProps) {
  return (
    <div className="input-label-wrapper">
      <label htmlFor={id}>{labelName}</label>
      <input
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
