import { ToastContainer } from "react-toastify";
import { SiEthereum } from "react-icons/si";

import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../components";
import * as S from "./Layout.styled";

export type ILayoutProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const navLinks = ["home", "transactions"];

const Layout = ({ children, ...rest }: ILayoutProps) => (
  <S.Container component="main" {...rest}>
    <Navbar links={navLinks} icon={<SiEthereum />} title="ETH Transactions" />
    {children}

    <ToastContainer role="alert" newestOnTop />
  </S.Container>
);
export default Layout;
