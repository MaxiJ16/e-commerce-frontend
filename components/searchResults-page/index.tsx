import { SearchProductForm } from "components/search-product-form";
import { useGetPagination } from "hooks";
import { useEffect, useState } from "react";
import { Card } from "components/card";
import { BodyTextBold, SubTitle } from "ui/text";
import { Loader } from "ui/loader/loading";
import {
  ContainerResultsPage,
  ContainerForm,
  ContainerCard,
  ContainerButtons,
  ContainerNoResults,
} from "./styled";

export const ResultsPage = (productName: any) => {
  const [page, setPage] = useState(1);
  const { data, maxPage, offset, setOffset } = useGetPagination(
    productName.productName
  );

  const product = data?.results;

  useEffect(() => {
    setOffset(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productName.productName]);

  const handleNextPage = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }

    if (offset < data.pagination.total - 3) {
      setOffset(offset + 3);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }

    if (offset >= 3) {
      setOffset(offset - 3);
    }
  };

  return (
    <ContainerResultsPage>
      <ContainerForm>
        <SearchProductForm />
      </ContainerForm>

      {data?.pagination.total == undefined ? (
        <div className="containerLoader">
          <Loader />
        </div>
      ) : data?.pagination.total > 0 ? (
        <>
          <BodyTextBold className="resultsAmount">
            {offset + 3 < data?.pagination.total
              ? offset + 3
              : data?.pagination.total}{" "}
            resultados de {data?.pagination.total}{" "}
          </BodyTextBold>
          <ContainerCard>
            {product.map((r: any) => (
              <Card
                title={r.Name}
                price={"$" + r.Cost}
                img={r.Image[0]?.url}
                objectId={r.objectID}
                key={r.objectID}
              />
            ))}
          </ContainerCard>

          <ContainerButtons>
            {page > 1 ? <button onClick={handlePrevPage}>{"<"}</button> : ""}

            {page < maxPage ? (
              <button onClick={handleNextPage}>{">"}</button>
            ) : (
              ""
            )}
          </ContainerButtons>
        </>
      ) : (
        <ContainerNoResults>
          <SubTitle>No hay productos que coincidan con tu búsqueda</SubTitle>
          <BodyTextBold>
            Prueba buscando alfombra, silla, mesa, lámpara, estante...
          </BodyTextBold>
        </ContainerNoResults>
      )}
    </ContainerResultsPage>
  );
};
