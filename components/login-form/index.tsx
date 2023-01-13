import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import router from "next/router";
import { sendCode, getToken, getSaveToken } from "lib/api";
import { BodyTextBold, SpanError, Title } from "ui/text";
import { PrimaryButton } from "ui/buttons";
import { Alert, Mail, Candado } from "ui/icons";
import { Loader } from "ui/loader/loading";
import { Input, Label, Form } from "./styled";

interface EFormValues {
  email: string;
}

interface CFormValues {
  code: string;
}

export const LoginForm = () => {
  const [mail, setMail] = useState("");
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState("");
  const token = getSaveToken();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>();

  const handleEmailForm: SubmitHandler<EFormValues> = async (data) => {
    setLoader(true);
    const { email } = data;
    await setMail(email);
    sendCode(email);

    setTimeout(() => {
      setLoader(false);
    }, 300);
  };

  const handleCodeForm: SubmitHandler<CFormValues> = async (data) => {
    const { code } = data;
    setLoader(true);

    try {
      await getToken(mail, code);
      router.push("/");
    } catch (error) {
      setErr("Código inválido");
      setLoader(false);
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
        <PrimaryButton>{loader ? <Loader /> : "Continuar"}</PrimaryButton>
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
        <Input type="password" {...register("code", { required: true })} />
      </label>
      {errors.code && (
        <SpanError role="alert">
          <Alert />
          Debes ingresar un código
        </SpanError>
      )}
      <SpanError>{err}</SpanError>
      <PrimaryButton>{loader ? <Loader /> : "Continuar"}</PrimaryButton>
    </Form>
  );
};
