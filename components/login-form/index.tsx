import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Form, Span } from "./styled";
import { SecondaryButton } from "ui/buttons";
import { useState } from "react";
import { BodyText, Tiny, Title } from "ui/text";
import { SubTitle } from "ui/text";

import { sendCode, getToken, getSaveToken } from "lib/api";
import router from "next/router";

interface EFormValues {
  email: string;
}

interface CFormValues {
  code: string;
}

export const LoginForm = () => {
  const [mail, setMail] = useState("");
  const token = getSaveToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleEmailForm: SubmitHandler<EFormValues> = async (data) => {
    const { email } = data;

    setMail(email);
    sendCode(email);
  };

  const handleCodeForm: SubmitHandler<CFormValues> = async (data) => {
    const { code } = data;

    try {
      // Esperamos la respuesta de getToken
      await getToken(mail, code);
      // Si todo salió ok lo redirigimos a la home
      router.push("/");
    } catch (error) {
      // Acá debemos guardar en un state el error y mostrarlo abajo
      return error;
    }
  };

  return !mail ? (
    !token ? (
      <Form onSubmit={handleSubmit(handleEmailForm)}>
        <Title>Ingresar</Title>
        <label>
          <Label>Email</Label>
          <Input type="email" {...register("email", { required: true })} />
        </label>
        {errors.email && <Span role="alert">Debes ingresar un email</Span>}
        <SecondaryButton>Continuar</SecondaryButton>
      </Form>
    ) : (
      <div>
        <Title>Ya te encuentras en Sesión.</Title>
      </div>
    )
  ) : (
    <Form onSubmit={handleSubmit(handleCodeForm)}>
      <Title>Código</Title>
      <label>
        <Input type="text" {...register("code", { required: true })} />
      </label>
      <BodyText>Te enviamos un código a tu email</BodyText>
      <SecondaryButton>Ingresar</SecondaryButton>
      {errors.code && <Span role="alert">Debes ingresar un código</Span>}
    </Form>
  );
};
