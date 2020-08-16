import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";

import CallToAction from "../ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "4em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  missionStatement: {
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "45em",
    lineHeight: "1.4",
    marginBottom: "4em",
  },
  sectionContainer: {
    marginBottom: "8em",
  },
  bigImage: {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
    },
  },
  avatar: {
    height: "20em",
    width: "20em",
    [theme.breakpoints.down("xs")]: {
      height: "12.5em",
      width: "12.5em",
    },
  },
}));

const AboutUsPage = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid className={classes.mainContainer}>
      <Container maxWidth="lg">
        <Grid container direction="column">
          {/* statement */}
          <Grid item style={{ marginBottom: "2em" }}>
            <Typography variant="h2" align={matchesMD ? "center" : undefined}>
              About Us
            </Typography>
          </Grid>
          <Grid item container justify="center">
            <Typography
              variant="h4"
              align="center"
              className={classes.missionStatement}
            >
              Whether it be person to person, business to consumer, or an
              individual to their interests, technology is meant to bring us
              closer to what we care about in the best way possible. Arc
              Development will use that principle to provide fast, modern,
              inexpensive, and aesthetic software to the Midwest and beyond.
            </Typography>
          </Grid>
          {/* statement */}

          {/* history */}
          <Grid
            container
            direction="row"
            className={classes.sectionContainer}
            spacing={3}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{
                maxWidth: "38em",
                margin: matchesSM ? "0 auto" : undefined,
              }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  gutterBottom
                  align={matchesSM ? "center" : undefined}
                >
                  History
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  style={{ fontWeight: 700 }}
                  align={matchesSM ? "center" : undefined}
                >
                  Founded in 2019, we’re ready to get our hands on the world’s
                  business problems.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  It all started with one question: Why aren’t all businesses
                  using available technology? There are many different answers
                  to that question: economic barriers, social barriers,
                  educational barriers, and sometimes institutional barriers.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  We aim to be a powerful force in overcoming these obstacles.
                  Recent developments in software engineering and computing
                  power, compounded by the proliferation of smart phones, has
                  opened up infinite worlds of possibility. Things that have
                  always been done by hand can now be done digitally and
                  automatically, and completely new methods of interaction are
                  created daily. Taking full advantage of these advancements is
                  the name of the game.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  All this change can be a lot to keep up with, and that’s where
                  we come in.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justify={matchesSM ? "center" : "flex-end"}
              alignItems="center"
              md
            >
              <img
                src="https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_1280.jpg"
                alt=""
                className={classes.bigImage}
              />
            </Grid>
          </Grid>
          {/* history */}
          {/* team */}
          <Grid
            item
            container
            direction="column"
            className={classes.sectionContainer}
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h4" gutterBottom>
                Team
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph align="center">
                John Snow, Developer
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" paragraph>
                I am a crazy incredible developer.
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "2em" }}>
              <Avatar
                alt="developer"
                src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_1280.jpg"
                className={classes.avatar}
              />
            </Grid>
            <Grid item container direction={matchesMD ? "column" : "row"}>
              <Hidden lgUp>
                <Grid
                  item
                  lg
                  style={{
                    maxWidth: "45em",
                    margin: "0 auto",
                    padding: "1.25em",
                  }}
                >
                  <Typography variant="body1" paragraph align="center">
                    I taught myself basic coding from a library book in third
                    grade, and ever since then my passion has solely been set on
                    learning — learning about computers, learning mathematics
                    and philosophy, studying design, always just learning.
                  </Typography>
                  <Typography variant="body1" paragraph align="center">
                    Now I’m ready to apply everything I’ve learned, and to help
                    others with the intuition I have developed. I'm currently
                    teaching a course about building responsive modern user
                    interfaces on Udemy.com
                  </Typography>
                </Grid>
              </Hidden>
              {/* 1 */}
              <Grid
                item
                container
                direction="column"
                lg
                alignItems={matchesMD ? "center" : undefined}
                style={{ marginBottom: matchesMD ? "2em" : 0 }}
              >
                <Grid item>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/03/26/09/49/river-690374_1280.jpg"
                    alt="map"
                    className={classes.bigImage}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption">I am from Hamburg.</Typography>
                </Grid>
              </Grid>
              {/* 2 */}
              <Hidden mdDown>
                <Grid
                  item
                  lg
                  style={{
                    maxWidth: "45em",
                    margin: "0 auto",
                    padding: "1.25em",
                  }}
                >
                  <Typography variant="body1" paragraph align="center">
                    I taught myself basic coding from a library book in third
                    grade, and ever since then my passion has solely been set on
                    learning — learning about computers, learning mathematics
                    and philosophy, studying design, always just learning.
                  </Typography>
                  <Typography variant="body1" paragraph align="center">
                    Now I’m ready to apply everything I’ve learned, and to help
                    others with the intuition I have developed. I'm currently
                    teaching a course about building responsive modern user
                    interfaces on Udemy.com
                  </Typography>
                </Grid>
              </Hidden>
              {/* 3 */}
              <Grid
                item
                container
                direction="column"
                lg
                alignItems={matchesMD ? "center" : "flex-end"}
              >
                <Grid item>
                  <img
                    src="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg"
                    alt="dog"
                    className={classes.bigImage}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="caption" align="center">
                    my miniature dapple dachshund, Sterling
                  </Typography>
                </Grid>
              </Grid>
              {/*  */}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* call to action component */}
      <CallToAction setValue={setValue} />
    </Grid>
  );
};

export default AboutUsPage;
