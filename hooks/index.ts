import { useEffect, useState } from "react";
import useSWRImmutable from "swr/immutable";
import { fetchAPI, getMe, getSaveToken } from "lib/api";

export function useMe() {
  const [data, setData] = useState() as any;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMe();
      setData(data);
    };
    fetchData();
  }, []);

  return data;
}

export function useProduct(id: string) {
  const { data, error } = useSWRImmutable(`/products/${id}`, fetchAPI);
  return data;
}

export function useGetToken() {
  const getToken = getSaveToken();
  const [token, setToken] = useState() as any;

  useEffect(() => {
    setToken(getToken);
  }, [getToken]);

  return { token };
}

export function useGetPagination(productName: string) {
  const [offset, setOffset] = useState(0);

  const { data, error } = useSWRImmutable(
    `/search?q=${productName}&offset=${offset}&limit=${3}`,
    fetchAPI
  );

  const maxPage: number = Math.ceil(data?.pagination.total / 3);

  return {
    data,
    offset,
    setOffset,
    maxPage,
  };
}

export function useProductsFeatured() {
  const { data, error } = useSWRImmutable(`/products`, fetchAPI);

  let productsMostSelled = data?.results
    .sort((a: any, b: any) => {
      return b["Units_sold"] - a["Units_sold"];
    })
    .slice(0, 2);

  return productsMostSelled;
}
