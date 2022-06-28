import { createTheme } from "@mui/material";

const colors = {
  white: "#ffffff",
  darkBlue: "rgba(39, 51, 89, 0.4)",
  lightGray: "rgba(255, 255, 255, 0.05)",
  lightGray10: "rgba(255, 255, 255, 0.05)",
  dark: "#0f0e13",
  transparentDark: "rgba(0, 0, 0, 0.3)",
  purple: "#a099ff",
  cinder: "#100f15",
  rhino: "#2f3e6a",
  tawnyPort: "#722741",
  lime: "#98e79c",
  brinkPink: "#fb7076",
  cornflowerBlue: "#5D89EE",
  japonica: "#d8715f",
  brilliantRoes: "#f75596",
  yellowOrange: "#fda64e",
  aquamarine: "#61faeb",
};

const theme = createTheme({
  palette: {
    darkBlue: {
      main: `${colors.darkBlue}`,
      contrastText: `${colors.white}`,
    },
    dark: {
      main: `${colors.dark}`,
      transparent: `${colors.transparentDark}`,
      transparent10: `${colors.lightGray10}`,
    },
    purple: {
      main: `${colors.purple}`,
    },

    background: {
      layout: `radial-gradient(
          at 0% 0%,
          ${colors.cinder} 0,
          transparent 50%
        ),
        radial-gradient(at 50% 0%, ${colors.rhino}  0, transparent 50%),
        radial-gradient(at 100% 0%, ${colors.tawnyPort}  0, transparent 50%)`,
      navbar: `${colors.darkBlue}`,
      form: `${colors.darkBlue}`,
      modal: `${colors.darkBlue}`,
      tableHead: `${colors.darkBlue}`,
      tableRow: `${colors.lightGray}`,
      tableRowHover: `${colors.darkBlue}`,
      input: `${colors.lightGray}`,
      transactionCard: `${colors.darkBlue}`,
      toast: `${colors.transparentDark}`,
      blur: `backdrop-filter: blur(5px);
      -webkit-backdrop-filter: blur(5px)`,
      creditCard: `radial-gradient(
        at 83% 67%,
        ${colors.lime} 0,
        transparent 58%
      ),
      radial-gradient(at 67% 20%, ${colors.brinkPink} 0, transparent 59%),
      radial-gradient(at 88% 35%, ${colors.cornflowerBlue} 0, transparent 50%),
      radial-gradient(at 31% 91%, ${colors.japonica} 0, transparent 52%),
      radial-gradient(at 27% 71%, ${colors.brilliantRoes} 0, transparent 49%),
      radial-gradient(at 74% 89%, ${colors.yellowOrange} 0, transparent 51%),
      radial-gradient(at 53% 75%, ${colors.aquamarine} 0, transparent 45%);`,
    },
  },
  shape: {
    borderRadius: 5,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

export default theme;
