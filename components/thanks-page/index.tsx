import { Smile } from "ui/icons";
import { BodyTextBold, SubTitle } from "ui/text";
import { ContainerThanksPage } from "./style";

export const ThanksPage = () => {
  return (
    <ContainerThanksPage>
      <Smile/>
      <SubTitle>Gracias por tu compra</SubTitle>
      <BodyTextBold>Que la disfrutes!</BodyTextBold>
    </ContainerThanksPage>
  );
};
