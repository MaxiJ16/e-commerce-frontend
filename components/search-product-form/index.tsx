import Router from "next/router";
import React from "react";
import { PrimaryButton } from "ui/buttons";
import { TextField } from "ui/textfield";
import { SearchForm } from "./styles";

export const SearchProductForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      query: { value: string };
    };

    const query = target.query.value;
    Router.push(`/search/${query}`);
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <TextField
        placeholder="Encontrá tu producto ideal"
        label=""
        type="text"
        name="query"
      />
      <PrimaryButton>Buscar</PrimaryButton>
    </SearchForm>
  );
};
