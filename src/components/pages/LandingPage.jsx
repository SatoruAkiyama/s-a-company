import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import CallToAction from "../ui/CallToAction";

import LandingImg from "../../assets/landing.jpg";
import Service1 from "../../assets/service1.jpg";
import Service2 from "../../assets/service2.jpg";
import Service3 from "../../assets/service3.jpg";

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
    ...theme.typography.learnButton,
    margin: "0 auto",
  },
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "310px",
    margin: ` 0 auto`,
  },
  specialText: {
    color: theme.palette.secondary.main,
    fontWeight: 500,
  },
  subtitle: {
    marginBottom: "0.25em",
  },
  icon: {
    marginLeft: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "20px",
    },
  },
  serviceContainer: {
    marginTop: "12em",
    "& .service1": {
      marginTop: "-8em",
    },
  },
  revolutionBackground: {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2016/08/02/07/45/the-polygon-1562743_1280.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  revolutionCard: {
    position: "absolute",
    boxShadow: theme.shadows[10],
    padding: "10em",
    backgroundColor: "#ffffffcf",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
    },
  },
  infoBackground: {
    backgroundImage: `url("https://cdn.pixabay.com/photo/2016/07/08/08/59/background-1503863_1280.png")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  infoLearnButton: {
    ...theme.typography.learnButton,
    margin: "10px auto 0",
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary,
      color: "#fff",
    },
  },
}));

const LandingPage = ({ setValue, setSelectedIndex }) => {
  useEffect(() => {
    document.title = "S-A Company";
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/* main block */}
      <Grid item>
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            alignItems="center"
            direction="row"
          >
            <Grid item sm className={classes.heroTextContainer}>
              <Typography variant="h2" align="center">
                Hello. We are Passionate
                <br /> creative developers.
              </Typography>
              <Grid
                container
                direction="row"
                justify="center"
                className={classes.buttonContainer}
              >
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
                <Grid item>
                  <Button
                    variant="outlined"
                    className={classes.learnButton}
                    component={Link}
                    to="/revolution"
                    onClick={() => setValue(2)}
                  >
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
        </Container>
      </Grid>

      {/* service1  */}
      <Grid item className={classes.serviceContainer}>
        <Container maxWidth="lg" className="service1">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={matchesSM ? "center" : undefined}
          >
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Save Energy. Save Tiem. Save Money
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>Celebration</span>.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/custom-software"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                width="250px"
                height="140px"
                src={Service1}
                alt="service1"
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* service2 */}
      <Grid item className={classes.serviceContainer}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={matchesSM ? "center" : "flex-end"}
          >
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
              <Typography variant="h4">IOS/Android Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Integrate your web experience or create a standalone app <br />
                with either mobile platform.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/mobile-apps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                width="250px"
                height="140px"
                src={Service2}
                alt="service2"
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>

      {/* service3  */}
      <Grid item className={classes.serviceContainer}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={matchesSM ? "center" : undefined}
          >
            <Grid item style={{ textAlign: matchesSM ? "center" : undefined }}>
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/web-sites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item>
              <img
                className={classes.icon}
                width="250px"
                height="140px"
                src={Service3}
                alt="service3"
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      {/* card component */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "50em", marginTop: "12em" }}
        >
          <Card className={classes.revolutionCard}>
            <CardContent>
              <Grid
                container
                direction="column"
                item
                style={{ textAlign: `center` }}
              >
                <Grid>
                  <Typography variant="h3">The Revolution</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recipe for revolution.
                  </Typography>
                </Grid>
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
            </CardContent>
          </Card>
          <div className={classes.revolutionBackground} />
        </Grid>
      </Grid>
      {/* info */}
      <Grid item className={classes.infoBackground}>
        <Container maxWidth="lg">
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ height: "40em" }}
          >
            <Grid item style={matchesSM ? { margin: "0 auto" } : undefined}>
              <Grid container direction="column" style={{ minWidth: "260px" }}>
                <Grid item>
                  <Typography
                    variant="h2"
                    style={{ color: "#fff", textAlign: "center" }}
                  >
                    About Us
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    style={{ textAlign: "center" }}
                  >
                    Let's get personal.
                  </Typography>
                </Grid>
                <Button
                  variant="outlined"
                  className={classes.infoLearnButton}
                  component={Link}
                  to="/about-us"
                  onClick={() => {
                    setValue(3);
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
            <Grid item style={matchesSM ? { margin: "0 auto" } : undefined}>
              <Grid container direction="column" style={{ minWidth: "260px" }}>
                <Grid item>
                  <Typography
                    variant="h2"
                    style={{ color: "#fff", textAlign: "center" }}
                  >
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    style={{ textAlign: "center" }}
                  >
                    Say hello!
                  </Typography>
                </Grid>
                <Button
                  variant="outlined"
                  className={classes.infoLearnButton}
                  component={Link}
                  to="/contact-us"
                  onClick={() => {
                    setValue(4);
                  }}
                >
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item>
        {/* call to action component */}
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
