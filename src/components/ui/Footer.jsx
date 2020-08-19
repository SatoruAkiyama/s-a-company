import React from "react";
import { Link } from "react-router-dom";

//make styles
import { makeStyles } from "@material-ui/core/styles";

//grid
import Grid from "@material-ui/core/Grid";

//hidden
import Hidden from "@material-ui/core/Hidden";

//sns icon
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.red,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    zIndex: 1302,
    "&:before": {
      width: "200%",
      height: "100%",
      top: 0,
      left: "-100%",
      backgroundColor: "#000",
      content: '" "',
      position: "absolute",
      transform: ` rotateZ(-60deg)`,
      [theme.breakpoints.down("sm")]: {
        height: "180%",
      },
    },
  },
  footerContainer: {
    position: "relative",
    zIndex: 10,
  },
  footerLink: {
    textDecoration: "none",
    color: "#fff",
  },
  gridItem: {
    margin: "2.25em",
  },
  snsIcon: {
    width: "40px",
    height: "40px",
    color: "white",
    margin: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "30px",
      height: "30px",
    },
  },
  copyRightContainer: {
    position: "relative",
    zIndex: 50,
    margin: "30px 10px 0",
  },
  copyRight: {
    color: "#fff",
    textDecoration: "none",
  },
}));

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.copyRightContainer}>
        <a
          href="https://s-a-company.netlify.app/"
          className={classes.copyRight}
        >
          &copy;2020 S-A Company
        </a>
      </div>

      <Hidden smDown>
        <Grid container justify="center" className={classes.footerContainer}>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/"
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/custom-software"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/mobile-apps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                IOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/web-sites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/revolution"
                onClick={() => setValue(2)}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/about-us"
                onClick={() => setValue(3)}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/about-us"
                onClick={() => setValue(3)}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/about-us"
                onClick={() => setValue(3)}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.footerLink}
                component={Link}
                to="/contact-us"
                onClick={() => setValue(4)}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Grid container direction="column">
        <Grid container justify="flex-end">
          <Grid
            item
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://satoruakiyama.com"
          >
            <HomeIcon className={classes.snsIcon} />
          </Grid>
          <Grid
            item
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/satoruakiyama1998"
          >
            <FacebookIcon className={classes.snsIcon} />
          </Grid>
          <Grid
            item
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/developer_satoru_akiyama/"
          >
            <InstagramIcon className={classes.snsIcon} />
          </Grid>
          <Grid
            item
            component={"a"}
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/SatoruAkiyama"
          >
            <GitHubIcon className={classes.snsIcon} />
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
