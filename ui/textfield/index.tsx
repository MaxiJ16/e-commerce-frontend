import { Input, Label } from "./styled";

type TexFieldProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
};

export function TextField(props: TexFieldProps) {
  const { placeholder, label, type, name } = props;

  return (
    <label>
      <Label>{label}</Label>
      <Input placeholder={placeholder} type={type} name={name} />
    </label>
  );
}
