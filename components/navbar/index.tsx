import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import { NavContainer, BgDiv, Header, ContainerForm } from "./styles";
import { removeToken } from "lib/api";
import { useGetToken, useMe } from "hooks";
import { SearchProductForm } from "components/search-product-form";

import { BurguerButton } from "ui/buttons/burguer-button";
import { LogoWhite } from "ui/icons";
import { LargeTextBold } from "ui/text";

export function Navbar() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const myData = useMe();
  const { token } = useGetToken();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleSignInClick = () => {
    handleClick();
    router.push("/signin");
  };
  const handleProfileClick = () => {
    handleClick();
    router.push(token ? "/profile" : "/signin");
  };
  const handleSearchClick = () => {
    handleClick();
    router.push("/");
  };

  const sessionClick = () => {
    console.log("session");
    if (token) {
      removeToken();
      Router.push("/");
    } else {
      Router.push("/signin");
    }
  };

  return (
    <Header>
      <NavContainer>
        <Link href={"/"}>
          <LogoWhite />
        </Link>

        <ContainerForm
          style={{ display: `${router?.asPath == "/" ? "none" : ""} ` }}
        >
          <SearchProductForm />
        </ContainerForm>

        <div className={`link-container ${clicked ? `active` : ``}`}>
          <LargeTextBold onClick={handleSignInClick}>Ingresar</LargeTextBold>

          <LargeTextBold onClick={handleProfileClick}>Mi Perfil</LargeTextBold>

          <LargeTextBold onClick={handleSearchClick}>Buscar</LargeTextBold>

          <p style={{ color: "red" }}>{`${token ? myData?.email : ""}`}</p>

          <p
            style={{
              color: "yellow",
              fontSize: "20px",
              padding: "10px",
              border: "2px solid",
            }}
            onClick={sessionClick}
          >{`${token ? "Cerrar Sesión" : "Iniciar Sesión"}`}</p>
        </div>

        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>

        <BgDiv className={`initial ${clicked ? `active` : ``}`}></BgDiv>
      </NavContainer>
    </Header>
  );
}
