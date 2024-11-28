export interface InputProps {
  name: string;
  type?: 'text' | 'email' | 'password' | 'tel';
  placeholder?: string;
  id?: string; 
  label?: string;
}

