import { createMuiTheme } from "@material-ui/core/styles";

const pink = "#ff7474";
const orange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      pink: `${pink}`,
      orange: `${orange}`,
    },
    primary: {
      main: `${pink}`,
    },
    secondary: {
      main: `${orange}`,
    },
  },
});
