import { Layout } from "components/layout";
import { ProfilePage } from "components/profile-page";
import type { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Mi perfil - Compralo</title>
      </Head>
      <ProfilePage />
    </Layout>
  );
};

export default Profile;
