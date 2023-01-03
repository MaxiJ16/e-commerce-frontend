import Router from "next/router";
import { getOrder, getSaveToken } from "lib/api";
import { useMe, useProduct } from "hooks";
import { SearchProductForm } from "components/search-product-form";
import { PrimaryButton } from "ui/buttons";
import { BodyText, SubTitle, Title } from "ui/text";
import { Loader } from "ui/loader/loading";
import {
  ContainerProductPage,
  ContainerImg,
  ProductImg,
  ContainerDetail,
  ContainerForm,
  ContainerProductDetail,
  ContainerLoader,
} from "./styled";
import { useState } from "react";

export const Product = ({ productId }: any) => {
  const productData = useProduct(productId);
  const address = useMe()?.address;
  const token = getSaveToken();
  const [loader, setLoader] = useState(false);

  const handleBuy = async () => {
    setLoader(true)
    if (token) {
      try {
        const order = await getOrder(productId, address);
        if (order.url) {
          window.open(order.url);
          setLoader(false)
        }
      } catch (error) {
        throw error;
      }
    } else {
      Router.push("/signin");
    }
  };

  return productData == undefined ? (
    <ContainerLoader className="containerLoader">
      <Loader />
    </ContainerLoader>
  ) : (
    <ContainerProductPage>
      <ContainerForm>
        <SearchProductForm />
      </ContainerForm>
      <ContainerProductDetail>
        <ContainerImg>
          <ProductImg src={productData?.Image[0].url} />
        </ContainerImg>
        <ContainerDetail>
          <SubTitle>{productData?.Name}</SubTitle>
          <Title>{"$" + productData?.Cost}</Title>
          <PrimaryButton onClick={handleBuy}>
            <SubTitle>{loader ? <Loader/> : "Comprar"}</SubTitle>
          </PrimaryButton>
          <BodyText>{productData?.Description}</BodyText>
        </ContainerDetail>
      </ContainerProductDetail>
    </ContainerProductPage>
  );
};
