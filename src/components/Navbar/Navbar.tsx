import type { AppBarProps } from "@mui/material";
import { useState, useEffect } from "react";
import { usePageWide, useScrollPosition, useConnectWallet } from "../../hooks";
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
  const { scrollPosition } = useScrollPosition();
  const { active } = useConnectWallet();
  const { pageWide } = usePageWide();

  const closeOnOverlay = (event: React.MouseEvent) => {
    if ((event.target as Element).classList.contains("MuiBackdrop-root")) {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    if (pageWide > size.tablet && toggleMenu) {
      setToggleMenu(false);
    }
  }, [pageWide, toggleMenu]);

  return (
    <S.Container
      position="fixed"
      scrolled={!toggleMenu && scrollPosition > 60 ? "scrolled" : ""}
      data-testid="navbar-container"
      {...rest}
    >
      <S.NavbarWrapper>
        {!toggleMenu && (
          <S.LogoWrapper>
            {icon}
            {title}
          </S.LogoWrapper>
        )}
        {active && pageWide > size.tablet && (
          <S.LinksWrapper>
            {links.map((item: string) => (
              <S.NavLink
                to={item}
                smooth
                spy
                hashSpy
                data-testid="navbar-link"
                key={`nav-link-${item}`}
                role="link"
                offset={item === "home" ? -120 : -80}
                duration={500}
              >
                <S.LinkText variant="button">{item}</S.LinkText>
              </S.NavLink>
            ))}
          </S.LinksWrapper>
        )}
        {active && pageWide < size.tablet && !toggleMenu && (
          <S.OpenMobileMenuIcon
            onClick={() => setToggleMenu(true)}
            data-testid="sidebar-open-button"
          />
        )}
      </S.NavbarWrapper>
      {active && pageWide < size.tablet && toggleMenu && (
        <S.MobileBackdrop
          open={toggleMenu}
          onClick={(event: React.MouseEvent) => closeOnOverlay(event)}
        >
          <S.MobileMenuWrapper
            data-testid="sidebar-container"
            style={{ backdropFilter: "blur(10px) !important" }}
          >
            <S.CloseMobileMenuIcon
              onClick={() => setToggleMenu(false)}
              data-testid="sidebar-close-button"
            />

            {links.map((item: string) => (
              <S.NavLink
                to={item}
                smooth
                spy
                hashSpy
                key={`mobile-nav-link-${item}`}
                data-testid="sidebar-link"
                duration={500}
                offset={item === "home" ? -120 : -80}
                onClick={() => {
                  setTimeout(() => {
                    setToggleMenu(false);
                  }, 500);
                }}
              >
                <S.LinkText variant="button">{item}</S.LinkText>
              </S.NavLink>
            ))}
          </S.MobileMenuWrapper>
        </S.MobileBackdrop>
      )}
    </S.Container>
  );
};
export default Navbar;
