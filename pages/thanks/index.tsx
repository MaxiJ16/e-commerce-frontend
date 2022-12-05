import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Layout } from "components/layout";

const Thanks: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Gracias !</title>
      </Head>

      <h1>GRACIAS POR TU COMPRA</h1>
    </Layout>
  );
};

export default Thanks;
