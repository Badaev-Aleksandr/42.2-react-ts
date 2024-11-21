import "./styles.css";

function Input({ name, type, placeholder, id, labelName }) {
  return (
    <div className="input-label-wrapper">
      <label for={id}>{labelName}</label>
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
