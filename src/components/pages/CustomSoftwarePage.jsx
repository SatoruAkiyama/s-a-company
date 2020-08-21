import React, { useEffect } from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import CallToAction from "../ui/CallToAction";

import ServiceHeader from "../ui/ServiceHeader";

import DigitalData from "../../assets/digital-data.jpg";
import Scale from "../../assets/scale.jpg";
import Root from "../../assets/root.png";
import Automation from "../../assets/automation.png";
import Ux from "../../assets/ux.png";

const useStyes = makeStyles((theme) => ({
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
  arrowContainer: {
    "& h4": {
      fontSize: "1rem",
    },
  },
}));

const CustomSoftwarePage = ({ setSelectedIndex, setValue }) => {
  useEffect(() => {
    document.title = "-Custom Software- S-A Company";
  }, []);
  const classes = useStyes();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Container maxWidth="lg" className={classes.mainContainer}>
        <ServiceHeader
          setSelectedIndex={setSelectedIndex}
          next="IOS/Android App"
          nextLink="/mobile-apps"
          title="Custom Software Development"
          nextSelectIndex={1}
        >
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Whether we’re replacing old software or inventing new solutions,
              Arc Development is here to help your business tackle technology.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Using regular commercial software leaves you with a lot of stuff
              you don’t need, without some of the stuff you do need, and
              ultimately controls the way you work.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              Our custom solutions are designed from the ground up with your
              needs, wants, and goals at the core. This collaborative process
              produces finely tuned software that is much more effective at
              improving your workflow and reducing costs than generalized
              options.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              paragraph
            >
              We create exactly what you what, exactly how you want it.
            </Typography>
          </Grid>
        </ServiceHeader>
        <Grid container direction="column">
          {/* middle */}
          <Grid
            item
            container
            direction="row"
            justify="space-around"
            style={{ marginBottom: "8em" }}
          >
            <Grid
              item
              container
              md
              direction="column"
              alignItems="center"
              style={{ marginBottom: matchesSM ? "3em" : undefined }}
            >
              <Grid item>
                <Typography variant="h4">Save Energy</Typography>
              </Grid>
              <Grid item>
                <img
                  src="https://img.icons8.com/color/96/000000/energy-saving-bulb.png"
                  alt="/"
                  width="70px"
                  height="70px"
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              md
              direction="column"
              alignItems="center"
              style={{ marginBottom: matchesSM ? "3em" : undefined }}
            >
              <Grid item>
                <Typography variant="h4">Save Time</Typography>
              </Grid>
              <Grid item>
                <img
                  src="https://img.icons8.com/officel/80/000000/time-machine--v1.png"
                  alt="/"
                  width="70px"
                  height="70px"
                />
              </Grid>
            </Grid>
            <Grid item container md direction="column" alignItems="center">
              <Grid item>
                <Typography variant="h4">Save Money</Typography>
              </Grid>
              <Grid item>
                <img
                  src="https://img.icons8.com/bubbles/100/000000/money.png"
                  alt="/"
                  width="70px"
                  height="70px"
                />
              </Grid>
            </Grid>
          </Grid>

          {/* Digital Documents data and scale section */}
          <Grid item container direction="row" style={{ marginBottom: "8em" }}>
            <Grid item container direction="row" lg>
              <Grid
                item
                container
                direction="column"
                md
                className={classes.text}
              >
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="h4"
                  >
                    Digital Documents and Data
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body1"
                    paragraph
                  >
                    Reduce Errors. Reduce Waste. Reduce Costs.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body1"
                    paragraph
                  >
                    Billions are spent annually on the purchasing, printing, and
                    distribution of paper. On top of the massive environmental
                    impact this has, it causes harm to your bottom line as well.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body1"
                    paragraph
                  >
                    By utilizing digital forms and documents you can remove
                    these obsolete expenses, accelerate your communication, and
                    help the Earth.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container md direction="column" alignItems="center">
                <Grid item>
                  <img src={DigitalData} alt="" width="270px" height="270px" />
                </Grid>
              </Grid>
            </Grid>
            {/* scale */}
            <Grid
              item
              container
              direction="row"
              lg
              style={{ marginTop: matchesMD ? "3rem" : undefined }}
            >
              <Grid item container md direction="column" alignItems="center">
                <Grid item>
                  <img src={Scale} alt="" width="270px" height="270px" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                md
                className={classes.text}
              >
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : "right"}
                    variant="h4"
                  >
                    Scale
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : "right"}
                    variant="body1"
                    paragraph
                  >
                    Whether you’re a large brand, just getting started, or
                    taking off right now, our application architecture ensures
                    pain-free growth and reliability.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* root */}
          <Grid
            item
            container
            direction="column"
            justify="center"
            className={classes.text}
            style={{ margin: "0 auto 8em" }}
          >
            <Grid item style={{ textAlign: "center" }}>
              <img src={Root} alt="" width="320px" height="300px" />
            </Grid>
            <Grid item>
              <Typography align="center" variant="h4">
                Root-Cause Analysis
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="body1" paragraph>
                Many problems are merely symptoms of larger, underlying issues.
              </Typography>
            </Grid>
            <Grid item>
              <Typography align="center" variant="body1" paragraph>
                We can help you thoroughly examine all areas of your business to
                develop a holistic plan for the most effective implementation of
                technology.
              </Typography>
            </Grid>
          </Grid>

          {/* automation ux */}
          <Grid item container direction="row" style={{ marginBottom: "8em" }}>
            <Grid item container direction="row" lg>
              <Grid
                item
                container
                direction="column"
                md
                className={classes.text}
              >
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="h4"
                  >
                    Automation
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body1"
                    paragraph
                  >
                    Why waste time when you don’t have to?
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body1"
                    paragraph
                  >
                    We can help you identify processes with time or event based
                    actions which can now easily be automated.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : undefined}
                    variant="body1"
                    paragraph
                  >
                    Increasing efficiency increases profits, leaving you more
                    time to focus on your business, not busywork.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container md direction="column" alignItems="center">
                <Grid item>
                  <img src={Automation} alt="" width="270px" height="270px" />
                </Grid>
              </Grid>
            </Grid>
            {/* ux */}
            <Grid
              item
              container
              direction="row"
              lg
              style={{ marginTop: matchesMD ? "3rem" : undefined }}
            >
              <Grid item container md direction="column" alignItems="center">
                <Grid item>
                  <img src={Ux} alt="" width="270px" height="270px" />
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                md
                className={classes.text}
              >
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : "right"}
                    variant="h4"
                  >
                    User Experience Design
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : "right"}
                    variant="body1"
                    paragraph
                  >
                    A good design that isn’t usable isn’t a good design.
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : "right"}
                    variant="body1"
                    paragraph
                  >
                    So why are so many pieces of software complicated,
                    confusing, and frustrating?
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    align={matchesSM ? "center" : "right"}
                    variant="body1"
                    paragraph
                  >
                    By prioritizing users and the real ways they interact with
                    technology we’re able to develop unique, personable
                    experiences that solve problems rather than create new ones.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* call to action component */}
      <CallToAction setValue={setValue} />
    </>
  );
};

export default CustomSoftwarePage;
