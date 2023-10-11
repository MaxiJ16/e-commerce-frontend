import Router, { useRouter } from "next/router";
import { useState } from "react";
import { removeToken } from "lib/api";
import { useGetToken, useMe } from "hooks";
import { SearchProductForm } from "components/search-product-form";
import { Menu } from "./menu";
import { BurguerButton } from "ui/buttons/burguer-button";
import { LogoWhite, Search, User, Logout } from "ui/icons";
import { BodyTextBold } from "ui/text";
import { LogoutButton, PrimaryButton, TertiaryButton } from "ui/buttons";
import { NavContainer, BgDiv, Header, ContainerForm, ContainerContent } from "./styles";

export function Navbar() {
  const router = useRouter();
  const { token } = useGetToken();
  const [clicked, setClicked] = useState(false);
  const myData: any = useMe();
  const name = myData?.username?.split(" ")[0];

  const handleClick = () => {
    setClicked(!clicked);
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
    handleClick();
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
        <LogoWhite onClick={() => router.push("/")} />

        <ContainerForm
          style={{
            display: `${router?.asPath == "/" ? "none" : ""} `,
          }}
        >
          <SearchProductForm />
        </ContainerForm>

        <Menu
          router={router}
          token={token}
          logOut={sessionClick}
          userData={myData?.username ? myData?.username : myData?.email}
        />

        {token ? (
          <>
            <ContainerContent
              className={`link-container ${clicked ? `active` : ``}`}
            >
              <span onClick={handleClick} className="X">
                X
              </span>

              <BodyTextBold className="containerName">
                {token
                  ? "Bienvenido " + (name ? name : myData?.email) + "!"
                  : ""}
              </BodyTextBold>

              <PrimaryButton onClick={handleProfileClick}>
                <User />
                <BodyTextBold>Mi Perfil</BodyTextBold>
              </PrimaryButton>
              <PrimaryButton onClick={handleSearchClick}>
                <Search />
                Buscar
              </PrimaryButton>
              <LogoutButton onClick={sessionClick}>
                <Logout />
                Logout
              </LogoutButton>
            </ContainerContent>

            <div className="burguer">
              <BurguerButton clicked={clicked} handleClick={handleClick} />
            </div>

            <BgDiv className={`initial ${clicked ? `active` : ``}`} />
          </>
        ) : (
          <TertiaryButton
            className="loginButton"
            onClick={() => router.push("/signin")}
          >
            Ingresar
          </TertiaryButton>
        )}
      </NavContainer>
    </Header>
  );
}
