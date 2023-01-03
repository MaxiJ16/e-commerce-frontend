import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/layout";
import { Home } from "components/home-page";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Compralo</title>
      </Head>
      <Home />
    </Layout>
  );
};

export default HomePage;
