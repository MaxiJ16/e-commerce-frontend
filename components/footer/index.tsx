import Link from "next/link";
import { LogoWhite, Facebook, Instagram, Linkedin } from "ui/icons";
import { BodyText, LargeTextBold } from "ui/text";
import { FooterContainer, FooterContent } from "./styled";

export function Footer() {
  return (
    <FooterContainer>
      <LogoWhite />
      <FooterContent>
        <LargeTextBold>Redes</LargeTextBold>
        <Link
          href={"https://www.linkedin.com/in/maximiliano-jofre/"}
          passHref={true}
          target={"blank"}
        >
          <Linkedin />
          <BodyText>Linkedin</BodyText>
        </Link>

        <Link
          href={"https://www.instagram.com/maaxij"}
          passHref={true}
          target={"blank"}
        >
          <Instagram />
          <BodyText>Instagram</BodyText>
        </Link>

        <Link
          href={"https://www.facebook.com/Maxij16/"}
          passHref={true}
          target={"blank"}
        >
          <Facebook />
          <BodyText>Facebook</BodyText>
        </Link>
      </FooterContent>
    </FooterContainer>
  );
}
