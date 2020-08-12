import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: `50px`,
    marginRight: `25px`,
    height: `45px`,
  },
  menu: {
    backgroundColor: theme.palette.common.red,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.6,
    "&:hover": {
      opacity: 1,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = useState("/");
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  let history = useHistory();
  let pathname = history.location.pathname;
  if (
    pathname === "/web-sites" ||
    pathname === "/custom-software" ||
    pathname === "/mobile-apps"
  ) {
    pathname = "/services";
  }

  useEffect(() => {
    setValue(pathname);

    switch (history.location.pathname) {
      case "/custom-software":
        setSelectedIndex(1);
        break;
      case "/mobile-apps":
        setSelectedIndex(2);
        break;
      case "/web-sites":
        setSelectedIndex(3);
        break;
      default:
        break;
    }
  }, [pathname, history.location.pathname]);

  const handleChange = (e, value) => {
    e.preventDefault();
    setValue(value);
  };

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    handleClose();
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software", link: "/custom-software" },
    { name: "Mobile App Development", link: "/mobile-apps" },
    { name: "Website Develpment", link: "/web-sites" },
  ];

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
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                onClick={() => history.push("./services")}
                onMouseOver={(e) => handleMouseOver(e)}
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
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={i}
                  component={Link}
                  to={option.link}
                  onClick={(e) => {
                    handleMenuItemClick(e, i);
                    setValue("/services");
                  }}
                  selected={i === selectedIndex && value === "/services"}
                  classes={{ root: classes.menuItem }}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
