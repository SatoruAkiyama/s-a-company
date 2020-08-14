import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

//styles customize
import { makeStyles } from "@material-ui/core/styles";

//header bar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//header scroll trigger
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

//button
import Button from "@material-ui/core/Button";

//drawer menu
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//ressponsive
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

//swipeable drawer
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

//material icon
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

//list
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 960px
  // lg, large: 1280px
  // xl, extra-large: 1920px
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `2em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.25em",
    },
  },
  logo: {
    height: `6em`,
    cursor: `pointer`,
    [theme.breakpoints.down("md")]: {
      height: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
  },
  tabContainer: {
    marginLeft: `auto`,
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: `25px`,
    opacity: 0.6,
    "&.Mui-selected": {
      borderBottom: `3px solid #fff`,
      "&:hover": {
        opacity: 1,
      },
    },
    "&:hover": {
      opacity: 0.8,
    },
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: `50px`,
    marginRight: `25px`,
    height: `45px`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.red,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.6,
    "&.Mui-selected": {
      opacity: 1,
      "&:hover": {
        opacity: 1,
      },
    },
    "&:hover": {
      opacity: 0.8,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: `50px`,
    width: `50px`,
    color: `#fff`,
    [theme.breakpoints.down("xs")]: {
      height: `40px`,
      width: `40px`,
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.red,
  },
  drawerItemText: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: "0.7",
    "&:hover": {
      opacity: "1",
    },
  },
  drawerItemSelected: {
    ...theme.typography.tab,
    color: "#fff",
    opacity: "1",
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleChange = (e, newValue) => {
    e.preventDefault();
    setValue(newValue);
  };

  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, i) => {
    handleClose();
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/custom-software",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "Mobile App Development",
      link: "/mobile-apps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Develpment",
      link: "/web-sites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaHaspopup: anchorEl ? "true" : undefined,
      onMouseOver: (e) => handleMouseOver(e),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about-us", activeIndex: 3 },
    { name: "Contact Us", link: "/contact-us", activeIndex: 4 },
    {
      name: " Free Estimate",
      link: "/estimate",
      estimate: true,
      activeIndex: false,
    },
  ];

  let history = useHistory();
  let pathname = history.location.pathname;

  useEffect(() => {
    [...menuOptions, ...routes].forEach((route) => {
      switch (pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;
      }
    });
  }, [
    pathname,
    menuOptions,
    routes,
    setSelectedIndex,
    setValue,
    selectedIndex,
    value,
  ]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes
          .slice(0, 5)
          .map(({ name, link, ariaOwns, ariaHaspopup, onMouseOver }, idx) => (
            <Tab
              key={idx}
              className={classes.tab}
              onClick={() => history.push(link)}
              label={name}
              aria-owns={ariaOwns}
              aria-haspopup={ariaHaspopup}
              onMouseOver={onMouseOver}
            />
          ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {
          history.push("/estimate");
          setValue(false);
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        keepMounted
        style={{ zIndex: `1302` }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={i}
            component={Link}
            to={option.link}
            onClick={(e) => {
              handleMenuItemClick(e, i);
              setValue(1);
            }}
            selected={i === selectedIndex && value === 1}
            classes={{ root: classes.menuItem }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map(({ name, link, estimate, activeIndex }, idx) => (
            <ListItem
              component={Link}
              to={link}
              key={idx}
              divider
              button
              onClick={() => {
                setOpenDrawer(false);
                setValue(idx);
              }}
              className={estimate ? classes.drawerItemEstimate : null}
              selected={value === activeIndex}
            >
              <ListItemText
                disableTypography
                className={
                  value === activeIndex
                    ? classes.drawerItemSelected
                    : classes.drawerItemText
                }
              >
                {name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
        className={classes.drawerIconContainer}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <img
              src={logo}
              alt="company log"
              className={classes.logo}
              onClick={() => {
                history.push("./");
                setValue(0);
              }}
            />
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};
export default Header;
