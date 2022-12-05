import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "components/layout";
import { Product } from "components/product-page";

const Item: NextPage = ({ data }: any) => {
  const productId = data.objectID;
  return (
    <Layout>
      <Head>
        <title>Buscar - Compralo</title>
      </Head>

      <Product productId={productId}></Product>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://e-commerce-backend-maxij16.vercel.app/api/products"
  );
  const data = await res.json();
  const results = data?.results;
  const paths = results.map((item: any) => {
    return { params: { itemId: item.objectID } };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const productId = context.params.itemId;
  const res = await fetch(
    `https://e-commerce-backend-maxij16.vercel.app/api/products/${productId}`
  );
  const data = await res.json();
  return {
    props: { data },
    revalidate: 4000,
  };
}
export default Item;
