import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/layout";

import { ThanksPage } from "components/thanks-page";

const Thanks: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Gracias por tu compra!</title>
      </Head>
      <ThanksPage/>
    </Layout>
  );
};

export default Thanks;
