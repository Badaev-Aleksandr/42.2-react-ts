import "./styles.css";
import { InputProps } from "./types";

function Input({ name, type = 'text', placeholder, id, label }: InputProps) {
  return (
    <div className="input-label-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
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
