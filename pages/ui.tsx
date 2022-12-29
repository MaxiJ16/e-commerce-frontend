import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "components/layout";
import {
  SubTitle,
  Title,
  BodyText,
  BodyTextBold,
  Tiny,
  LargeText,
  LargeTextBold,
} from "ui/text";
import { TextField } from "ui/textfield";
import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "ui/buttons";
import { Home } from "components/home-page";
import { Logo } from "ui/icons";
import { Card } from "components/card";
import { Navbar } from "components/navbar";

import { Menu } from "components/navbar/menu";
const Ui: NextPage = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    // <Navbar />
    // <Layout>
    //   <br />
    //   <br />
    //   <Home query={q}></Home>
    //   <br />
    //   <Title>Title</Title>
    //   <br />
    //   <SubTitle>Subtitle</SubTitle>
    //   <br />
    //   <LargeText>LargeText</LargeText>
    //   <br />
    //   <LargeTextBold>LargeTextBold</LargeTextBold>
    //   <br />
    //   <BodyText>BodyText</BodyText>
    //   <br />
    //   <BodyTextBold>BodyTextBold</BodyTextBold>
    //   <br />
    //   <Tiny>Tiny</Tiny>
    //   <br />
    //   <BaseButton>BaseButton</BaseButton>
    //   <br />
    //   <PrimaryButton>PrimaryButton</PrimaryButton>
    //   <br />
    //   <SecondaryButton>SecondaryButton</SecondaryButton>
    //   <br />
    //   <TertiaryButton>TertiaryButton</TertiaryButton>
    //   <br />
    //   <TextField placeholder="placeholder"></TextField>
    //   <br />
    //   <Logo />
    //   <br />
    //   <Card title="Reloj super guachiguau" price="456" />
    // </Layout>30%
    <Menu />
  );
};

export default Ui;
