import { BuyThanks } from "ui/icons";
import { BodyTextBold, SubTitle } from "ui/text";
import { ContainerThanksPage } from "./style";

export const ThanksPage = () => {
  return (
    <ContainerThanksPage>
      <BuyThanks />
      <SubTitle>Gracias por tu compra</SubTitle>
      <BodyTextBold>Que lo disfrutes!</BodyTextBold>
    </ContainerThanksPage>
  );
};
