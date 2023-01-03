import { useProductsFeatured } from "hooks";
import { Card } from "components/card";
import { SubTitle } from "ui/text";
import { FeaturedProductsContainer, CardContainer } from "./styled";

export function FeaturedProducts() {
  const productsMostSelled = useProductsFeatured();
  return (
    <FeaturedProductsContainer>
      <SubTitle color="var(--white)">Productos Destacados</SubTitle>

      <CardContainer>
        {productsMostSelled?.map((p: any) => (
          <Card
            title={p.Name}
            price={`$${p.Cost}`}
            img={p.Image[0].url}
            objectId={p.objectID}
            key={p.objectID}
          ></Card>
        ))}
      </CardContainer>
    </FeaturedProductsContainer>
  );
}
