import { Root, Content } from "./styled";
import { Navbar } from "components/navbar";
import { Footer } from "components/footer";
import { Suspense } from "react";
import { Loader } from "ui/loader/loading";

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Root>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Content>{children}</Content>
      </Suspense>
      <Footer />
    </Root>
  );
};
