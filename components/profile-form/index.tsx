import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { modifiedUserData } from "lib/api";
import { Input, Label } from "components/login-form/styled";
import { useMe } from "hooks";
import { PrimaryButton } from "ui/buttons";
import { SpanError, SpanSuccess } from "ui/text";
import { Alert, Check } from "ui/icons";
import { Loader } from "ui/loader/loading";
import { Form } from "./styled";

type Inputs = {
  username: string;
  address: string;
  phone: number;
};

export const ProfileForm = () => {
  const router = useRouter();
  const myData = useMe();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoader(true);
    if (
      data.username == myData?.username &&
      data.address == myData?.address &&
      data.phone == myData?.phone
    ) {
      setError(true);
      setSuccess(false);
      setLoader(false);
    } else {
      const res = await modifiedUserData({
        username: data.username,
        address: data.address,
        phone: Number(data.phone),
      });

      if (res) {
        setError(false);
        setSuccess(true);
        setLoader(false);
        setTimeout(() => {
          router.push("/");
        }, 900);
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
        {errors.username && <SpanError>Campo Obligatorio</SpanError>}
      </label>

      <label>
        <Label>Dirección</Label>
        <Input
          {...register("address", { required: true })}
          defaultValue={myData?.address}
        ></Input>
        {errors.address && <SpanError>Campo Obligatorio</SpanError>}
      </label>

      <label>
        <Label>Teléfono</Label>
        <Input
          {...register("phone", { required: true })}
          type="number"
          defaultValue={myData?.phone}
        ></Input>
        {errors.phone && (
          <SpanError className="err">Campo Obligatorio</SpanError>
        )}
      </label>

      {error ? (
        <SpanError role="alert">
          <Alert />
          No realizaste ningún cambio
        </SpanError>
      ) : (
        ""
      )}

      {success ? (
        <SpanSuccess role="success">
          <Check />
          Cambios realizados con éxito!
        </SpanSuccess>
      ) : (
        ""
      )}

      <PrimaryButton type="submit">
        {!loader ? "Guardar" : <Loader />}
      </PrimaryButton>
    </Form>
  );
};
