import Router from "next/router";
import { getOrder, getSaveToken } from "lib/api";
import { useMe, useProduct } from "hooks";
import { PrimaryButton } from "ui/buttons";
import { BodyText, SubTitle, Title } from "ui/text";

import {
  ContainerProductPage,
  ContainerImg,
  ProductImg,
  ContainerDetail,
} from "./styled";

export const Product = ({ productId }: any) => {
  const productData = useProduct(productId);
  const token = getSaveToken();
  const address = useMe()?.address;

  const handleBuy = async () => {
    if (token) {
      try {
        const order = await getOrder(productId, address);
        if (order.url) {
          window.open(order.url, "_blank");
        }
      } catch (error) {
        throw error;
      }
    } else {
      Router.push("/signin");
    }
  };

  return (
    <ContainerProductPage>
      <ContainerImg>
        <ProductImg src={productData?.Images[0].url} />
      </ContainerImg>
      <ContainerDetail>
        <SubTitle>{productData?.Name}</SubTitle>
        <Title>{"$" + productData?.Cost}</Title>
        <PrimaryButton onClick={handleBuy}>
          <SubTitle>Comprar</SubTitle>
        </PrimaryButton>
        <BodyText>{productData?.Description}</BodyText>
      </ContainerDetail>
    </ContainerProductPage>
  );
};
