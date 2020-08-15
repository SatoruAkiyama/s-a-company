import { createMuiTheme } from "@material-ui/core/styles";

const red = "#ff1466";
const orange = "#ffb900";
const gray = "#818181";

export default createMuiTheme({
  palette: {
    common: {
      red: red,
      orange: orange,
    },
    primary: {
      main: red,
    },
    secondary: {
      main: orange,
    },
  },
  typography: {
    tab: {
      fontSize: `1rem`,
      textTransform: `none`,
      color: `#fff`,
      fontFamily: "Robbot",
      fontWeight: "700",
    },
    estimate: {
      fontSize: `1rem`,
      textTransform: `none`,
      color: "#fff",
      borderRadius: `50px`,
    },
    h2: {
      fontFamily: "Robbot",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: red,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Robbot",
      fontSize: "2.25rem",
      color: red,
      fontWeight: 700,
    },
    h4: {
      fontFamily: "Robbot",
      fontSize: "1.75rem",
      color: red,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: gray,
    },
    subtitle2: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#fff",
    },
    body1: {
      fontSize: "1.25rem",
      color: gray,
      fontWeight: 300,
      fontFamily: "Robbot",
    },
    learnButton: {
      borderColor: red,
      color: red,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontSize: `1rem`,
      width: "145px",
      "&:hover": {
        color: "#fff",
        backgroundColor: red,
      },
    },
  },
});
