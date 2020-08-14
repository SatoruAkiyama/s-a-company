import { createMuiTheme } from "@material-ui/core/styles";

const red = "#ff1466";
const orange = "#ffb900";

export default createMuiTheme({
  palette: {
    common: {
      red: `${red}`,
      orange: `${orange}`,
    },
    primary: {
      main: `${red}`,
    },
    secondary: {
      main: `${orange}`,
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
      color: `${red}`,
      lineHeight: 1.5,
    },
  },
});
