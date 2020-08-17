import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    width: "180px",
    height: "60px",
    fontSize: "1.25rem",
    margin: "10px auto",
    color: "#fff",
  },
  background: {
    backgroundImage: `url("https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100%",
    width: "100%",
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.secondary.main}`,
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "700",
    width: "200px",
    height: "80px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "#fff",
    },
  },
}));

const CallToAction = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container>
      <Grid item className={classes.background}>
        <Container maxWidth="lg">
          <Grid
            container
            justify={matchesSM ? "center" : "space-between"}
            alignItems="center"
            style={{ height: "60em" }}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid
              item
              style={matchesSM ? { margin: "0 auto 40px" } : undefined}
            >
              <Grid container direction="column" style={{ minWidth: "260px" }}>
                <Grid item>
                  <Typography
                    variant="h2"
                    style={{
                      textShadow: `2px 2px 0px ${theme.palette.primary.main}`,
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    Simple Software. <br /> Revolutionary Results.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    style={{ fontSize: "1.5rem", textAlign: "center" }}
                  >
                    Take advantage of the 21st Century.
                  </Typography>
                </Grid>
                <Grid item style={{ textAlign: "center" }}>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    component={Link}
                    to="/revolution"
                    onClick={() => {
                      setValue(2);
                    }}
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item style={matchesSM ? { margin: "0 auto" } : undefined}>
              <Grid container direction="column">
                <Grid item>
                  <Button
                    variant="contained"
                    className={classes.estimate}
                    component={Link}
                    to="/estimate"
                    onClick={() => {
                      setValue(false);
                    }}
                  >
                    Free Estimate
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
