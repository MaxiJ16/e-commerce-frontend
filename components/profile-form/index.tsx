import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label } from "components/login-form/styled";
import { SecondaryButton } from "ui/buttons";
import { useMe } from "hooks";
import { modifiedUserData } from "lib/api";

const Form = styled.form`
  display: grid;
  gap: 14px;

  button {
    color: var(--black);
    margin-top: 20px;
  }
`;

type Inputs = {
  username: string;
  address: string;
  phone: number;
};

export const ProfileForm = () => {
  const myData = useMe();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (
      data.username == myData?.username &&
      data.address == myData?.address &&
      data.phone == myData?.phone
    ) {
      alert("No realizaste ningún cambio");
    } else {
      const res = await modifiedUserData({
        username: data.username,
        address: data.address,
        phone: Number(data.phone),
      });
     
      if(res){
        alert("Cambios realizados!")
      }
    }
  
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <Label>Nombre Completo</Label>
        <Input
          {...register("username", { required: true })}
          defaultValue={myData?.username}
        ></Input>
        {errors.username && <span>Campo Obligatorio</span>}
      </label>
      <label>
        <Label>Dirección</Label>
        <Input
          {...register("address", { required: true })}
          defaultValue={myData?.address}
        ></Input>
        {errors.address && <span>Campo Obligatorio</span>}
      </label>
      <label>
        <Label>Teléfono</Label>
        <Input
          {...register("phone", { required: true })}
          type="number"
          defaultValue={myData?.phone}
        ></Input>
        {errors.phone && <span>Campo Obligatorio</span>}
      </label>
      <SecondaryButton type="submit">Guardar</SecondaryButton>
    </Form>
  );
};
