import type { AppBarProps } from "@mui/material";
import { useState, useEffect } from "react";
import { usePageWide } from "../../hooks";
import { size } from "../../styles/breakpoints";
import * as S from "./Navbar.styled";

export type INavbarProps = {
  links: string[];
  icon: JSX.Element;
  title: string;
} & React.HTMLAttributes<HTMLHeadElement> &
  AppBarProps;

const Navbar = ({ links, icon, title, ...rest }: INavbarProps) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const { pageWide } = usePageWide();

  useEffect(() => {
    if (pageWide > size.tablet && toggleMenu) {
      setToggleMenu(false);
    }
  }, [pageWide, toggleMenu]);

  return (
    <S.Container position="fixed" data-testid="navbar-container" {...rest}>
      <S.NavbarWrapper>
        <S.LogoWrapper>
          {icon}
          {title}
        </S.LogoWrapper>
        {pageWide > size.tablet && (
          <S.LinksWrapper>
            {links.map((item: string) => (
              <S.NavLink
                data-testid="navbar-link"
                key={`nav-link-${item}`}
                role="link"
              >
                {item}
              </S.NavLink>
            ))}
          </S.LinksWrapper>
        )}
        {pageWide < size.tablet && !toggleMenu && (
          <S.OpenMobileMenuIcon
            onClick={() => setToggleMenu(true)}
            data-testid="sidebar-open-button"
          />
        )}
        {pageWide < size.tablet && toggleMenu && (
          <S.MobileMenuWrapper data-testid="sidebar-container">
            <S.CloseMobileMenuIcon
              onClick={() => setToggleMenu(false)}
              data-testid="sidebar-close-button"
            />

            {links.map((item: string) => (
              <S.NavLink
                key={`mobile-nav-link-${item}`}
                data-testid="sidebar-link"
              >
                {item}
              </S.NavLink>
            ))}
          </S.MobileMenuWrapper>
        )}
      </S.NavbarWrapper>
    </S.Container>
  );
};
export default Navbar;
