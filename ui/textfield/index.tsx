import { Search } from "ui/icons";
import { Input, TextLabel, Label } from "./styled";

type TexFieldProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  name?: string;
};

export function TextField(props: TexFieldProps) {
  const { placeholder, label, type, name } = props;

  return (
    <Label>
      <TextLabel>{label}</TextLabel>
      <Input placeholder={placeholder} type={type} name={name} />
      <Search/>
    </Label>
  );
}
