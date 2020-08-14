import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import LandingImg from "../../assets/landing.jpg";

const useStyles = makeStyles((theme) => ({
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    marginRight: "20px",
    width: "145px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButton: {
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontSize: `1rem`,
    width: "145px",
  },
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
    },
  },
  heroTextContainer: {
    minWidth: "310px",
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      <Grid item>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          direction="row"
        >
          <Grid item sm className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Hello. We are
              <br /> creative developers.
            </Typography>
            <Grid
              container
              direction="row"
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimate}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButton}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm>
            <img
              src={LandingImg}
              alt="landing img"
              height="100%"
              width="100%"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
