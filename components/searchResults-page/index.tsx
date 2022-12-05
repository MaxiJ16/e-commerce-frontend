import { SearchProductForm } from "components/search-product-form";
import { useGetPagination } from "hooks";
import { useEffect, useState } from "react";
import { BaseButton, PrimaryButton } from "ui/buttons";
import { Card } from "ui/card";
import { ContainerResultsPage, ContainerForm, ContainerCard } from "./style";

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

      {product ? (
        <>
          {/* {<h2>Página: {page}</h2>} */}
          <div>
            {offset + 3 < data?.pagination.total
              ? offset + 3
              : data?.pagination.total}{" "}
            resultados de {data?.pagination.total}
          </div>
          <ContainerCard>
            {product.map((r: any) => (
              <Card
                title={r.Name}
                price={"$" + r.Cost}
                img={r.Images[0]?.url}
                objectId={r.objectID}
                key={r.objectID}
              />
            ))}
          </ContainerCard>

          <div>
            <button onClick={handlePrevPage}>{"<"}</button>
            <button onClick={handleNextPage}>{">"}</button>
          </div>
        </>
      ) : (
        <ContainerCard>
          <h1>No hay productos que coincidan con tu búsqueda</h1>
        </ContainerCard>
      )}
    </ContainerResultsPage>
  );
};