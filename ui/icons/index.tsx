import styled from "styled-components";

import LogoSVG from "./logo.svg";

export const Logo = styled(LogoSVG)`
  width: 153px;
  height: 34px;
`;

import LogoWhiteSVG from "./logo-white.svg";

export const LogoWhite = styled(LogoWhiteSVG)`
  width: 153px;
  height: 34px;
`;

import LinkedinSVG from "./linkedin.svg";

export const Linkedin = styled(LinkedinSVG)`
  width: 20px;
  height: 20px;
`;

import InstagramSVG from "./instagram.svg";

export const Instagram = styled(InstagramSVG)`
  width: 20px;
  height: 20px;
`;

import FacebookSVG from "./facebook.svg";

export const Facebook = styled(FacebookSVG)`
  width: 20px;
  height: 20px;
`;

import UserSVG from "./user.svg";

export const User = styled(UserSVG)`
  width: 30px;
  height: 30px;
  stroke: var(--white);
`;

import SearchSVG from "./search.svg";

export const Search = styled(SearchSVG)`
  width: 30px;
  height: 30px;
  stroke: var(--black);
`;
import LogoutSVG from "./log-out.svg";

export const Logout = styled(LogoutSVG)`
  width: 30px;
  height: 30px;
  stroke: var(--black);
`;

import MailSVG from "./mail.svg";

export const Mail = styled(MailSVG)`
  width: 20px;
  height: 20px;
  stroke: var(--gray-100);
`;

import AlertTriangleSVG from "./alert-triangle.svg";

export const Alert = styled(AlertTriangleSVG)`
  width: 24px;
  height: 24px;
  stroke: var(--danger);
`;

import CandadoSVG from "./lock.svg";

export const Candado = styled(CandadoSVG)`
  stroke: var(--gray-100);
`;

import CheckSVG from "./check.svg";

export const Check = styled(CheckSVG)`
  width: 24px;
  height: 24px;
  stroke: var(--success);
`;

import ThanksSVG from "./thanks.svg";

export const BuyThanks = styled(ThanksSVG)`
  width: 300px;
  height: 300px;
  @media (min-width: 769px) {
    width: 500px;
    height: 400px;
  }
`;
