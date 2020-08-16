import React from "react";
import { Link } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Service1 from "../../assets/service1.jpg";
import Service2 from "../../assets/service2.jpg";
import Service3 from "../../assets/service3.jpg";

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    margin: "0 auto",
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em",
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
    marginTop: "10em",
    "& .service1": {
      marginTop: "-6em",
    },
  },
}));

const ServicesPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Grid container direction="column">
        <Grid item>
          <Typography
            variant="h2"
            style={{ marginTop: matchesSM ? "1em" : "2em" }}
            align={matchesSM ? "center" : undefined}
          >
            Services
          </Typography>
        </Grid>
        {/* service1  */}
        <Grid item className={classes.serviceContainer}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={matchesSM ? "center" : "flex-end"}
            className="service1"
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em",
              }}
            >
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
        </Grid>

        {/* service2 */}
        <Grid item className={classes.serviceContainer}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={matchesSM ? "center" : undefined}
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
        </Grid>

        {/* service3  */}
        <Grid item className={classes.serviceContainer}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify={matchesSM ? "center" : "flex-end"}
            style={{ marginBottom: "10em" }}
          >
            <Grid
              item
              style={{
                textAlign: matchesSM ? "center" : undefined,
                width: matchesSM ? undefined : "35em",
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Optimized for Search Engines, built for speed. Beautiful design,
                good UI/UX.
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesPage;
