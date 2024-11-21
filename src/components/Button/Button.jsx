import "./styles.css";

function Button({ name, type = "button", onClick }) {
  return (
    <button onClick={onClick} className="main-button" type={type}>
      {name}
    </button>
  );
}

export default Button;
