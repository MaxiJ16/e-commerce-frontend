import { Root, Content } from "./styled";
import { Navbar } from "components/navbar";
import { Footer } from "components/footer";

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Root>
      <Navbar/>
      <Content>{children}</Content>
      <Footer/>
    </Root>
  );
};
