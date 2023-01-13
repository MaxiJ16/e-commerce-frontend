import { FeaturedProducts } from "components/featured-products";
import { SearchProductForm } from "components/search-product-form";
import { Title } from "ui/text";
import { Root, FirtsPageContainer } from "./styled";

export function Home() {
  return (
    <Root>
      <FirtsPageContainer>
        <Title>Compralo Shop</Title>
        <SearchProductForm />
      </FirtsPageContainer>

      <FeaturedProducts />
    </Root>
  );
}
