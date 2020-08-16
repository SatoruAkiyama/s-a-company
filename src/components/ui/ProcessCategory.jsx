import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bigImage: {
    maxWidth: "500px",
    maxHeight: "500px",
    width: "90%",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
      maxHeight: "300px",
      margin: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "250px",
      maxHeight: "250px",
    },
  },
}));

const RevolutionPage = ({ bgColor, children, title, imageUrl }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      item
      container
      direction="column"
      style={{ backgroundColor: bgColor, height: "70em" }}
      justify="center"
    >
      <Container maxWidth="lg">
        <Grid item container direction="row">
          <Grid
            item
            container
            direction="column"
            style={{
              maxWidth: "30em",
              margin: matchesMD ? "1em auto" : undefined,
            }}
            lg
          >
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                style={{ color: "#000" }}
                align={matchesMD ? "center" : "left"}
              >
                {title}
              </Typography>
            </Grid>
            {children}
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={matchesSM ? "center" : "flex-end"}
            lg
          >
            <img src={imageUrl} alt="" className={classes.bigImage} />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default RevolutionPage;
