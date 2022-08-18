import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#606060",
      light: "#898989",
      dark: "#171717",
    },
    secondary: {
      main: "#FF725E",
      light: "#686868",
      contrastText: "#ffff",
    },
    grey: {
      50: "#E3E3E3",
      100: "#B0B0B0",
      200: "#FAFAFA",
    },
    info: {
      50: "#E3E3E3",
      light: "#686868",
      dark: "#8C52C6",
      main: "#FFFFFF",
    },
    success: {
      main: "#683799",
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },

    fontSize: 16,
    fontFamily: "Roboto",

    subtitle1: {
      lineHeight: "24px",
      fontStyle: "regular",
      fontSize: 16,
      fontWeight: 400,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
    body1: {
      lineHeight: "22px",
      fontSize: 14,
      fontWeight: 400,
    },
    h1: {
      lineHeight: "36px",
      fontSize: 24,
      fontWeight: 500,
    },
    h2: {
      fontWeight: 700,
      fontSize: "24px",
      lineHeight: "36px",
    },
    h3: {
      lineHeight: "36px",
      fontSize: 24,
      fontFamily: "Roboto",
      fontStyle: "bold",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "#606060",
          "&.Mui-selected": {
            backgroundColor: "transparent",
            color: "#FF725E",
          },
          minWidth: 160,
        },
        labelIcon: {
          color: "#686868",
          width: "20%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "#FFFFFF",
          backgroundColor: "#FF725E",
        },
      },
    },
  },
});

export default theme;
