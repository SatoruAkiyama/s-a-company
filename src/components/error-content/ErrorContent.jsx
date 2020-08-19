import React from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import Error from "../../assets/error.jpg";
const useStyles = makeStyles((theme) => ({
  error: {
    width: "100%",
    height: "auto",
    maxWidth: "600px",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
    },
  },
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  errorButton: {
    ...theme.typography.learnButton,
    width: "180px",
    height: "60px",
    fontSize: "1.25rem",
    margin: "10px auto",
    color: theme.palette.common.red,
  },
}));

const ErrorContent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container maxWidth="lg" className={classes.mainContainer}>
      <Grid item align={matchesMD ? "center" : ""}>
        <Typography variant="h2">Error...</Typography>
      </Grid>
      <Grid
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
      >
        <Grid item>
          <img className={classes.error} src={Error} alt="error " />
        </Grid>
        <Grid item container direction="column" md alignItems="center">
          <Grid item style={{ marginBottom: "2em" }}>
            <Typography variant="h4" align="center" gutterBottom>
              Sorry, page not found...
            </Typography>
            <Typography variant="body1" align="center">
              There were error. Please try going to homepage.
            </Typography>
          </Grid>
          <Grid item>
            <a
              href="https://s-a-company.netlify.app/"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              <Button variant="outlined" className={classes.errorButton}>
                Go Back
              </Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ErrorContent;
