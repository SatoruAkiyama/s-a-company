import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const useStyes = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "6em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  text: {
    maxWidth: "38em",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
  arrowContainer: {
    marginTop: "0.5em",
    "& h4": {
      fontSize: "1rem",
    },
  },
}));

const ServiceHeader = ({
  setSelectedIndex,
  next,
  nextLink,
  children,
  title,
  nextSelectIndex,
}) => {
  const classes = useStyes();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const history = useHistory();
  return (
    <Grid container direction="column">
      <Grid item container direction="row" style={{ marginBottom: "6em" }}>
        <Hidden smDown>
          <Grid item className={classes.arrowContainer}>
            <Typography
              variant="h4"
              style={{ cursor: "pointer", marginRight: "0.75em" }}
              onClick={() => {
                history.push("/services");
                setSelectedIndex(0);
              }}
            >
              &#8592; Services
            </Typography>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.text}>
          <Grid item>
            <Typography
              variant="h3"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              {title}
            </Typography>
          </Grid>
          {children}
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.arrowContainer}>
            <Typography
              variant="h4"
              style={{ cursor: "pointer", marginLeft: "0.75em" }}
              onClick={() => {
                history.push(`${nextLink}`);
                setSelectedIndex(nextSelectIndex);
              }}
            >
              &#8594; {next} <br /> &nbsp;&nbsp; &nbsp;&nbsp;Development
            </Typography>
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default ServiceHeader;
