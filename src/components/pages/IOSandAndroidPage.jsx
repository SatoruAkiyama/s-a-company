import React, { useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CallToAction from "../ui/CallToAction";

import ServiceHeader from "../ui/ServiceHeader";

import Mobile from "../../assets/mobile.jpg";
import Extend1 from "../../assets/extend1.png";
import Extend2 from "../../assets/extend2.png";
import Extend3 from "../../assets/extend3.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4em",
    opacity: 0,
    animation: "$fade-in 1s forwards",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  "@keyframes fade-in": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  text: {
    maxWidth: "38em",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
}));

const IOSandAndroidPage = ({ setSelectedIndex, setValue }) => {
  useEffect(() => {
    document.title = "-iOS and Android App- S-A Company";
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container maxWidth="lg" className={classes.mainContainer}>
        <ServiceHeader
          setSelectedIndex={setSelectedIndex}
          next="Website"
          nextLink="/web-sites"
          title="iOS/Android App Development"
          nextSelectIndex={2}
        >
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
        </ServiceHeader>
        <Grid container>
          {/* first block */}
          <Grid
            item
            container
            direction="row"
            spacing={2}
            style={{ marginBottom: "8em" }}
          >
            <Grid item container direction="column" md className={classes.text}>
              <Grid item>
                <Typography
                  variant="h4"
                  align={matchesSM ? "center" : undefined}
                >
                  Integration
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  Our technology enables an innate interconnection between web
                  and mobile applications, putting everything you need right in
                  one convenient place.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  This allows you to extend your reach, reinvent interactions,
                  and develop a stronger relationship with your users than ever
                  before.
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ textAlign: "center", margin: "0 auto" }}>
              <img src={Mobile} alt="" width="300px" height="300px" />
            </Grid>
            <Grid item container direction="column" md className={classes.text}>
              <Grid item>
                <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                  Simultaneous Platform Support
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : "right"}
                  paragraph
                >
                  Our cutting-edge development process allows us to create apps
                  for iPhone, Android, and tablets — all at the same time.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : "right"}
                  paragraph
                >
                  This significantly reduces costs and creates a more unified
                  brand experience across all devices.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* second block */}
          <Grid
            item
            container
            direction="row"
            justify="center"
            spacing={2}
            style={{ marginBottom: "8em" }}
          >
            <Grid
              item
              container
              direction="column"
              lg
              className={classes.text}
              style={{ marginBottom: matchesSM ? "3em" : undefined }}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Extend Functionality
                </Typography>
              </Grid>
              <Grid item style={{ textAlign: "center", margin: "0 auto" }}>
                <img src={Extend1} alt="" width="300px" height="300px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              lg
              className={classes.text}
              style={{ marginBottom: matchesSM ? "3em" : undefined }}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Extend Access
                </Typography>
              </Grid>
              <Grid item style={{ textAlign: "center", margin: "0 auto" }}>
                <img src={Extend2} alt="" width="300px" height="300px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              lg
              className={classes.text}
              style={{ marginBottom: matchesSM ? "3em" : undefined }}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Increase Engagement
                </Typography>
              </Grid>
              <Grid item style={{ textAlign: "center", margin: "0 auto" }}>
                <img src={Extend3} alt="" width="300px" height="300px" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <CallToAction setValue={setValue} />
    </>
  );
};

export default IOSandAndroidPage;
