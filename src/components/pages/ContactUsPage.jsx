import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useMediaQuery } from "@material-ui/core";

//dialog
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// circular
import CircularProgress from "@material-ui/core/CircularProgress";

//snackbar
import Snackbar from "@material-ui/core/Snackbar";

// icon
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  contactBackground: {
    backgroundImage: `url("https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "50em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      paddingBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: "initial",
    },
  },
  estimate: {
    ...theme.typography.estimate,
    backgroundColor: "transparent",
    border: `2px solid ${theme.palette.secondary.main}`,
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "700",
    width: "200px",
    height: "80px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "#fff",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    width: "180px",
    height: "60px",
    fontSize: "1.25rem",
    margin: "10px auto",
    color: "#fff",
  },
  message: {
    border: `1.5px solid ${theme.palette.common.orange}`,
    marginTop: "3em",
    borderRadius: 5,
    padding: ".5em",
  },
  sendButton: {
    width: "220px",
    height: "40px",
    margin: "20px auto 10px",
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 50,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  mainContainer: {
    opacity: 0,
    animation: "$fade-in 1s forwards",
  },
  "@keyframes fade-in": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
}));

const ContactUsPage = ({ setValue }) => {
  useEffect(() => {
    document.title = "-Contact Us- S-A Company";
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = form;

  const [helper, setHelper] = useState({
    emailHelper: "",
    phoneHelper: "",
  });

  const { emailHelper, phoneHelper } = helper;

  const [dialogOpen, setDialog] = useState(false);

  const [loading, setLoading] = useState(false);

  const [snackBar, setSnackbar] = useState({
    snackbarOpen: false,
    snackbarMessage: "",
    snackbarBackgroundColor: "",
  });

  const { snackbarOpen, snackbarMessage, snackbarBackgroundColor } = snackBar;

  // ————-——EMAIL——————————
  // /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  // ——————PHONE——————————
  // /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    let valid;
    switch (name) {
      case "email":
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
        if (!valid) {
          setHelper({
            ...helper,
            emailHelper: "Invaild email",
          });
        } else {
          setHelper({
            ...helper,
            emailHelper: "",
          });
        }
        break;
      case "phone":
        if (phone.length === 9) {
          valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
            value
          );
        } else {
          valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(
            value
          );
        }

        if (!valid) {
          setHelper({
            ...helper,
            phoneHelper: "Invaild phone number",
          });
        } else {
          setHelper({
            ...helper,
            phoneHelper: "",
          });
        }
        break;
      default:
        break;
    }
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", form }),
    });
    axios
      .post("https://fir-a-company.firebaseio.com/contact.json", form)
      .then(() => {
        setLoading(false);
        setForm({
          ...form,
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setSnackbar({
          ...snackBar,
          snackbarOpen: true,
          snackbarMessage: "Message sent successfully!",
          snackbarBackgroundColor: "#4bb543",
        });
        setTimeout(() => {
          setDialog(false);
        }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        setSnackbar({
          ...snackBar,
          snackbarOpen: true,
          snackbarMessage: "There were error, please try again.",
          snackbarBackgroundColor: "#ff0000",
        });
      });
  };

  return (
    <Grid
      container
      direction={matchesMD ? "column" : "row"}
      className={classes.mainContainer}
    >
      {/* contact */}
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={3}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            style={{ padding: matchesMD ? `3em 0` : undefined }}
          >
            <Grid item>
              <Typography
                variant="h2"
                style={{ lineHeight: 1 }}
                align={matchesMD ? "center" : undefined}
              >
                Contact Us
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                gutterBottom
                align={matchesMD ? "center" : undefined}
              >
                Don't hesitate to contact us.
              </Typography>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item>
                <PhoneIcon />
              </Grid>
              <Grid item>
                <a
                  href="tel:5555555555"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  000-0000-0000{" "}
                </a>
              </Grid>
            </Grid>
            <Grid item container spacing={1}>
              <Grid item>
                <MailOutlineIcon />
              </Grid>
              <Grid item>
                <a
                  href="mailto:satoruakiayama@example.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  satoruakiayama@example.com
                </a>
              </Grid>
            </Grid>

            {/* textField */}
            <Grid
              item
              container
              direction="column"
              spacing={2}
              style={{ marginTop: "0.5em" }}
            >
              <Grid item>
                <TextField
                  label="Name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  type="text"
                  required
                  color="secondary"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  type="email"
                  required
                  color="secondary"
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Phone Number"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  type="tel"
                  required
                  color="secondary"
                />
              </Grid>
            </Grid>
            <Grid item container direction="column">
              <TextField
                InputProps={{ disableUnderline: true }}
                id="message"
                name="message"
                type="text"
                required
                value={message}
                onChange={handleChange}
                multiline
                rows={6}
                className={classes.message}
                color="secondary"
              />
            </Grid>
            <Grid item container justify="center">
              <Button
                variant="contained"
                type="submit"
                onClick={() => setDialog(true)}
                disabled={
                  name === "" ||
                  message === "" ||
                  phoneHelper !== "" ||
                  emailHelper !== ""
                }
                className={classes.sendButton}
              >
                Send Message&nbsp; &nbsp; <SendIcon />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialog(false)}
        style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        PaperProps={{
          style: {
            padding: matchesXS
              ? "1em 0"
              : matchesSM
              ? "1em 6em"
              : matchesMD
              ? "2em 12em"
              : "3em 18em",
          },
        }}
      >
        <Snackbar
          open={snackbarOpen}
          message={snackbarMessage}
          ContentProps={{ style: { backgroundColor: snackbarBackgroundColor } }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() =>
            setSnackbar({
              ...snackBar,
              snackbarOpen: false,
              snackbarMessage: "",
              snackbarBackgroundColor: "",
            })
          }
          autoHideDuration={3000}
        />
        <DialogContent>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" gutterBottom align="center">
                  Confirm Message
                </Typography>
              </Grid>
              <Grid item container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    label="Name"
                    id="name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    type="text"
                    required
                    color="secondary"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    type="email"
                    required
                    color="secondary"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    type="tel"
                    required
                    color="secondary"
                  />
                </Grid>
              </Grid>
              <Grid item container direction="column">
                <TextField
                  InputProps={{ disableUnderline: true }}
                  id="message"
                  name="message"
                  type="text"
                  required
                  value={message}
                  onChange={handleChange}
                  multiline
                  rows={6}
                  className={classes.message}
                  color="secondary"
                  placeholder="Tell us more about your project"
                />
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item>
                <Button
                  onClick={() => setDialog(false)}
                  color="secondary"
                  style={{ fontWeight: 300 }}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item container justify="center">
                <Button
                  variant="contained"
                  type="submit"
                  disabled={
                    name === "" ||
                    message === "" ||
                    phoneHelper !== "" ||
                    emailHelper !== ""
                  }
                  className={classes.sendButton}
                >
                  {loading ? (
                    <CircularProgress size={30} color="inherit" />
                  ) : (
                    <>
                      Send Message&nbsp; &nbsp;
                      <SendIcon />
                    </>
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
      {/* estimate and revolution */}
      <Grid
        item
        container
        lg={9}
        className={classes.contactBackground}
        alignItems="center"
        justify="space-around"
      >
        <Grid item style={matchesSM ? { margin: "0 auto 40px" } : undefined}>
          <Grid container direction="column" style={{ minWidth: "260px" }}>
            <Grid item>
              <Typography
                variant="h2"
                style={{
                  textShadow: `2px 2px 0px ${theme.palette.primary.main}`,
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Simple software. <br /> Revolutionary Results.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                style={{ fontSize: "1.5rem", textAlign: "center" }}
              >
                Take advantage of the 21st Century.
              </Typography>
            </Grid>
            <Grid item style={{ textAlign: "center" }}>
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
          </Grid>
        </Grid>
        <Grid item style={matchesSM ? { margin: "0 auto" } : undefined}>
          <Grid container direction="column">
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
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUsPage;
