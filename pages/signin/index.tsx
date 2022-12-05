import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/layout";
import { Login } from "components/login-page";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ingresar - Compralo</title>
      </Head>
      <Login />
    </Layout>
  );
};

export default LoginPage;
