import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../assets/logo.png";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `1em`,
  },
  logo: {
    height: `5em`,
    cursor: `pointer`,
  },
  tabContainer: {
    marginLeft: `auto`,
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: `25px`,
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: `50px`,
    marginRight: `25px`,
    height: `45px`,
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState("/");
  let history = useHistory();
  let pathname = history.location.pathname;

  const handleChange = (e, value) => {
    e.preventDefault();
    setValue(value);
  };

  useEffect(() => {
    setValue(pathname);
  }, [pathname]);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <img
              src={logo}
              alt="company log"
              className={classes.logo}
              onClick={() => {
                history.push("./");
                setValue("/");
              }}
            />
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor="primary"
            >
              <Tab
                className={classes.tab}
                onClick={() => history.push("./")}
                label="Home"
                value="/"
              />
              <Tab
                className={classes.tab}
                onClick={() => history.push("./services")}
                label="Services"
                value="/services"
              />
              <Tab
                className={classes.tab}
                onClick={() => history.push("./revolution")}
                label="The Revolution"
                value="/revolution"
              />
              <Tab
                className={classes.tab}
                onClick={() => history.push("./about-us")}
                label="About Us"
                value="/about-us"
              />
              <Tab
                className={classes.tab}
                onClick={() => history.push("./contact-us")}
                label="Contact Us"
                value="/contact-us"
              />
            </Tabs>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => history.push("./estimate")}
            >
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
