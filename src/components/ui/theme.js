import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#4ea9ce";
const orange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
    },
    primary: {
      main: `${blue}`,
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
    },
    estimate: {
      fontSize: `1rem`,
      textTransform: `none`,
      color: "#fff",
      borderRadius: `50px`,
    },
  },
});
