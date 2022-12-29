import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TertiaryButton } from "ui/buttons";
import { BurguerButton } from "ui/buttons/burguer-button";
import { User, Search, Logout } from "ui/icons";
import { BodyTextBold } from "ui/text";
import {
  MenuContainer,
  DropdownMenu,
  MenuTrigger,
  Ul,
  DropdownItem,
  ButtonContainer,
  Span,
} from "./styled";

export function Menu({ router, token, logOut, userData }: any) {
  const name = userData?.split(" ")[0];
  const [open, setOpen] = useState(false);

  const menuRef = useRef() as any;

  useEffect(() => {
    let handler = (e: any) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return !token ? (
    <ButtonContainer>
      <TertiaryButton
        onClick={() => {
          router.push("/signin");
        }}
      >
        Ingresar
      </TertiaryButton>
    </ButtonContainer>
  ) : (
    <MenuContainer ref={menuRef}>
      <MenuTrigger
        onClick={() => {
          setOpen(!open);
        }}
      >
        <User />
      </MenuTrigger>

      <DropdownMenu className={open ? "active" : "inactive"}>
        <BodyTextBold className="greeting">
          Bienvenido
          <Span>{name}!</Span>
        </BodyTextBold>
        <Ul>
          <DropdownItem>
            <User />
            <Link href={token ? "/profile" : "signin"}>Mi Perfil</Link>
          </DropdownItem>
          <DropdownItem>
            <Search />
            <Link href={"/"}>Buscar</Link>
          </DropdownItem>
          <DropdownItem>
            <Logout />
            <Link href={""} onClick={logOut}>
              Logout
            </Link>
          </DropdownItem>
        </Ul>
      </DropdownMenu>
    </MenuContainer>
  );
}
