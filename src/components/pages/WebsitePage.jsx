import React, { useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CallToAction from "../ui/CallToAction";

import ServiceHeader from "../ui/ServiceHeader";

import Analytics from "../../assets/analytics.png";
import EC from "../../assets/ec.jpg";
import OutReach from "../../assets/outreach.png";
import SEO from "../../assets/seo.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4em",
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
}));

const WebsitePage = ({ setSelectedIndex, setValue }) => {
  useEffect(() => {
    document.title = "-Services- S-A Company";
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container maxWidth="lg" className={classes.mainContainer}>
        <ServiceHeader
          setSelectedIndex={setSelectedIndex}
          next="Custom Software"
          nextLink="/custom-software"
          title="Website Development"
          nextSelectIndex={1}
        >
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
            </Typography>
          </Grid>
        </ServiceHeader>
        {/* main content */}
        <Grid container direction="column">
          {/* first block */}
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginBottom: "8em" }}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{ maxWidth: matchesSM ? undefined : "300px" }}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Analytics
                </Typography>
              </Grid>
              <Grid
                item
                style={{ textAlign: matchesSM ? "center" : undefined }}
              >
                <img src={Analytics} alt="" width="300px" height="250px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              justify="center"
              style={{
                maxWidth: "30em",
                margin: matchesSM ? "0 auto" : undefined,
              }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                >
                  Knowledge is power, and data is 21st Century gold. Analyzing
                  this data can reveal hidden patterns and trends in your
                  business, empowering you to make smarter decisions with
                  measurable effects.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* second block */}
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            justify={matchesSM ? undefined : "flex-end"}
            style={{ marginBottom: "8em" }}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{ maxWidth: matchesSM ? undefined : "300px" }}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  E-Commerce
                </Typography>
              </Grid>
              <Grid
                item
                style={{ textAlign: matchesSM ? "center" : undefined }}
              >
                <img src={EC} alt="" width="300px" height="300px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              justify="center"
              style={{
                maxWidth: "30em",
                margin: matchesSM ? "0 auto" : undefined,
              }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  It’s no secret that people like to shop online.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                  time for your slice of that pie.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* thrid block */}
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginBottom: "8em" }}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{ maxWidth: matchesSM ? undefined : "300px" }}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Outreach
                </Typography>
              </Grid>
              <Grid
                item
                style={{ textAlign: matchesSM ? "center" : undefined }}
              >
                <img src={OutReach} alt="" width="300px" height="300px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              justify="center"
              style={{
                maxWidth: "30em",
                margin: matchesSM ? "0 auto" : undefined,
              }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                >
                  Draw people in with a dazzling website. Showing off your
                  products online is a great way to help customers decide what’s
                  right for them before visiting in person.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* block4 */}
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            justify={matchesSM ? undefined : "flex-end"}
            style={{ marginBottom: "8em" }}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{ maxWidth: matchesSM ? undefined : "300px" }}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Search Engine Optimization
                </Typography>
              </Grid>
              <Grid
                item
                style={{ textAlign: matchesSM ? "center" : undefined }}
              >
                <img src={SEO} alt="" width="300px" height="300px" />
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md
              justify="center"
              style={{
                maxWidth: "30em",
                margin: matchesSM ? "0 auto" : undefined,
              }}
            >
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  How often have you ever been to the second page of Google
                  results?
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  If you’re like us, probably never.
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchesSM ? "center" : undefined}
                  paragraph
                >
                  Customers don’t go there either, so we make sure your website
                  is designed to end up on top.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* block4 */}
        </Grid>
      </Container>
      {/* call to action */}
      <CallToAction setValue={setValue} />
    </>
  );
};

export default WebsitePage;
