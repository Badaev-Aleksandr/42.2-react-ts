import { ChangeEvent } from "react";

export interface InputProps {
  name: string;
  type?: "text" | "email" | "password" | "tel";
  placeholder?: string;
  id?: string;
  label?: string;
  required?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
