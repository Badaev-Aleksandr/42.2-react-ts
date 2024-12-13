import {
  CheckboxElement,
  CheckboxLabel,
  CheckboxWrapper,
  ErrorMassege,
  Label,
} from "./styles";
import { CheckboxProps } from "./types";

function Checkbox({
  name,
  id,
  checked = false,
  value,
  onChange,
  disabled,
  label,
  error,
}: CheckboxProps) {
  return (
    <CheckboxWrapper>
      <CheckboxLabel>
        <CheckboxElement
          type="checkbox"
          name={name}
          id={id}
          checked={checked}
          value={value}
          onChange={onChange}
          disabled={disabled}
        />
        {label && <Label htmlFor={id}>{label}</Label>}
      </CheckboxLabel>
      <ErrorMassege>{error}</ErrorMassege>
    </CheckboxWrapper>
  );
}

export default Checkbox;
