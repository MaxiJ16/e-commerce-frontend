import Router from "next/router";
import { getOrder, getSaveToken } from "lib/api";
import { useMe, useProduct } from "hooks";
import { SearchProductForm } from "components/search-product-form";
import { PrimaryButton } from "ui/buttons";
import { BodyText, SpanError, SubTitle, Title } from "ui/text";
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
import { Alert } from "ui/icons";

export const Product = ({ productId }: any) => {
  const productData = useProduct(productId);
  const address = useMe()?.address;
  const token = getSaveToken();
  const [loader, setLoader] = useState(false);
  const [err, setErr] = useState("");

  const handleBuy = async () => {
    setLoader(true);
    if (token) {
      try {
        const order = await getOrder(productId, address);
        if (order.url) {
          window.open(order.url);
          setLoader(false);
        }
      } catch (error) {
        throw error;
      }
    } else {
      setErr("Debes estar logueado, redirigiendo a ingresar...");
      setTimeout(() => {
        Router.push("/signin");
      }, 1500);
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
            <SubTitle>{loader ? <Loader /> : "Comprar"}</SubTitle>
          </PrimaryButton>
          <SpanError>
            {err ? <Alert /> : ""}
            {err}
          </SpanError>
          <BodyText>{productData?.Description}</BodyText>
        </ContainerDetail>
      </ContainerProductDetail>
    </ContainerProductPage>
  );
};
