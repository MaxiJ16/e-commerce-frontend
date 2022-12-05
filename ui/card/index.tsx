import  Router  from "next/router";
import { LargeText, SubTitle } from "ui/text";
import { ContainerCard, CardImg, CardContent, Img } from "./styled";


type propsCard = {
  title?: string;
  price?: string;
  img?: string;
  objectId?: string;
};

export function Card({ title = "Titulo", price = "price", img, objectId }: propsCard) {
  return (
    <ContainerCard onClick={() => {Router.push(`/item/${objectId}`)}}>
      <CardImg>
        <Img src={img} alt={`${title}-img`} />
      </CardImg>

      <CardContent>
        <LargeText>{title}</LargeText>
        <SubTitle>{price}</SubTitle>
      </CardContent>
    </ContainerCard>
  );
}
