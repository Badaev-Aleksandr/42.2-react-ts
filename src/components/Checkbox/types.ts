import { ChangeEvent } from "react";

export interface CheckboxProps {
  name: string;
  id: string;
  label: string;
  checked: boolean;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
