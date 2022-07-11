import styled, { css } from "styled-components";
import { Link } from "react-scroll";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {
  AppBar,
  AppBarProps,
  Typography,
  TypographyProps,
  Backdrop,
} from "@mui/material";
import { device, size } from "../../styles";

type ContainerPrps = {
  scrolled?: string;
};

export const Container = styled(AppBar)<AppBarProps & ContainerPrps>`
  display: flex;
  align-items: center;
  height: 80px;
  box-shadow: none;
  background: ${({ scrolled, theme: { palette } }) =>
    scrolled ? palette.background.navbar : "transparent"};
  box-shadow: ${({ scrolled, theme: { shadows } }) => scrolled && shadows[10]};
  ${({ scrolled, theme: { palette } }) => scrolled && palette.background.blur};
  @media ${device.up.tablet} {
    background: ${({ theme: { palette } }) => palette.background.navbar};
    box-shadow: ${({ theme: { shadows } }) => shadows[10]};
    ${({ theme: { palette } }) => palette.background.blur}
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${size.laptopL}px;
  height: 100%;
  padding: 0 30px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: fit-content;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;

  svg {
    margin-right: 10px;
  }

  @media ${device.up.mobileM} {
    font-size: 20px;
    letter-spacing: 1.5px;
  }
  @media ${device.up.mobileM} {
    font-size: 24px;
  }
`;

export const LinksWrapper = styled.ul`
  display: flex;
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  margin: 15px auto 0 20px;
  align-self: center;
  @media ${device.up.tablet} {
    margin: 20px 20px 20px 0;
    align-self: end;
  }
`;

export const LinkText = styled(Typography)<TypographyProps>`
  letter-spacing: 1px;
  font-weight: bold;
  font-size: 20px;

  @media ${device.up.tablet} {
    font-size: 16px;
  }

  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
    text-shadow: -5px 8px 45px
      ${({ theme: { palette } }) => palette.primary.main};
  }
`;

export const MobileBackdrop = styled(Backdrop)`
  backdrop-filter: blur(3px);
`;

export const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  width: 250px;
  color: ${({ theme: { palette } }) => palette.primary.contrastText};
  border: 1px solid ${({ theme: { palette } }) => palette.dark.transparent};
  background: ${({ theme: { palette } }) => palette.background.navbar};
  box-shadow: ${({ theme: { shadows } }) => shadows[5]};
  ${({ theme: { palette } }) => palette.background.blur};
`;

const iconStyles = css`
  font-size: 28px;
  cursor: pointer;
`;

export const OpenMobileMenuIcon = styled(HiMenuAlt4)`
  ${iconStyles}
`;
export const CloseMobileMenuIcon = styled(AiOutlineClose)`
  ${iconStyles}
  align-self: flex-end;
  margin: 25px 25px 50px 0;
`;
