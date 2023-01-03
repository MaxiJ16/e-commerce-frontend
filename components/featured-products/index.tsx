import { useProductsFeatured } from "hooks";
import { Card } from "components/card";
import { SubTitle } from "ui/text";
import { FeaturedProductsContainer, CardContainer } from "./styled";
import { Loader } from "ui/loader/loading";

export function FeaturedProducts() {
  const productsMostSelled = useProductsFeatured();
  return (
    <FeaturedProductsContainer>
      <SubTitle>Productos Destacados</SubTitle>

      <CardContainer>
        {productsMostSelled == undefined ? (
          <Loader />
        ) : (
          productsMostSelled?.map((p: any) => (
            <Card
              title={p.Name}
              price={`$${p.Cost}`}
              img={p.Image[0].url}
              objectId={p.objectID}
              key={p.objectID}
            ></Card>
          ))
        )}
      </CardContainer>
    </FeaturedProductsContainer>
  );
}
