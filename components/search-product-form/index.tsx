import Router from "next/router";
import React, { useState } from "react";
import { PrimaryButton } from "ui/buttons";
import { Loader } from "ui/loader/loading";
import { SpanError } from "ui/text";
import { TextField } from "ui/textfield";
import { SearchForm } from "./styles";

export const SearchProductForm = () => {
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoader(true);

    const target = e.target as typeof e.target & {
      query: { value: string };
    };

    const query = target.query.value;

    if (query == "") {
      setLoader(false);
      setMessage("Ingresa un producto");
    } else {
      Router.push(`/search/${query}`);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <TextField
        placeholder="Encontrá tu producto ideal"
        label=""
        type="text"
        name="query"
      />
      <SpanError>{message}</SpanError>

      <PrimaryButton>{loader ? <Loader /> : "Buscar"}</PrimaryButton>
    </SearchForm>
  );
};
