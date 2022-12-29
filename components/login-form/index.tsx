import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Form } from "./styled";
import { PrimaryButton, SecondaryButton } from "ui/buttons";
import { useState } from "react";
import { BodyText, BodyTextBold, SpanError, Tiny, Title } from "ui/text";
import { SubTitle } from "ui/text";

import { sendCode, getToken, getSaveToken } from "lib/api";
import router from "next/router";
import { Alert, Mail, Candado } from "ui/icons";

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
          <Label>
            <Mail />
            Email
          </Label>
          <Input type="email" {...register("email", { required: true })} />
        </label>
        {errors.email && (
          <SpanError role="alert">
            <Alert />
            Debes ingresar un email
          </SpanError>
        )}
        <PrimaryButton>Continuar</PrimaryButton>
      </Form>
    ) : (
      <div>
        <Title>Ya te encuentras en Sesión.</Title>
      </div>
    )
  ) : (
    <Form onSubmit={handleSubmit(handleCodeForm)}>
      <Title>Ingresar</Title>
      <BodyTextBold>Te enviamos un código a tu email</BodyTextBold>
      <label>
        <Label>
          <Candado />
          Código
        </Label>
        <Input type="text" {...register("code", { required: true })} />
      </label>
      {errors.code && (
        <SpanError role="alert">
          <Alert />
          Debes ingresar un código
        </SpanError>
      )}
      <PrimaryButton>Continuar</PrimaryButton>
    </Form>
  );
};
