import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { Layout } from "components/layout";
import { ResultsPage } from "components/searchResults-page";

const Results: NextPage = () => {
  const router = useRouter();
  const productName = router.query.q;

  return (
    <Layout>
      <Head>
        <title>Buscar - Compralo</title>
      </Head>

      <ResultsPage productName={productName} />
    </Layout>
  );
};

export default Results;
