import React, { useState, useEffect, useRef } from "react";
import { cloneDeep } from "lodash";
import axios from "axios";

import { useTheme, makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import SendIcon from "@material-ui/icons/Send";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import check from "../../assets/check.svg";
import estimate from "../../assets/estimate.png";

import { DEFAULT, WEBSITE, SOFTWARE } from "../../data/QUESRION_DATA";

const useStyles = makeStyles((theme) => ({
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
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
    [theme.breakpoints.down("md")]: {
      margin: "0 auto",
      maxWidth: "300px",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
    fontSize: "1.25rem",
    fontWeight: "500",
    width: "220px",
    height: "40px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      color: "#fff",
    },
  },
  message: {
    border: `1.5px solid ${theme.palette.common.orange}`,
    marginTop: "3em",
    borderRadius: 5,
    padding: ".5em",
    marginBottom: "2em",
  },
}));

const EstimatePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const myRef = useRef(null);

  const defaultQuestions = DEFAULT;
  const softwareQuestions = SOFTWARE;
  const websiteQuestions = WEBSITE;

  const [questions, setQuestions] = useState(defaultQuestions);
  const [total, setTotal] = useState(0);
  const [isDialogOpene, setDialog] = useState(false);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [users, setUsers] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    document.title = "-Free Estimate- S-A Company";
  }, []);

  const nextQuestion = () => {
    if (matchesSM) {
      window.scrollTo(0, myRef.current.offsetTop - 90);
    }
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(
      (question) => question.active === true
    );
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };
  const preQuestion = () => {
    if (matchesSM) {
      window.scrollTo(0, myRef.current.offsetTop - 90);
    }
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(
      (question) => question.active === true
    );
    const activeIndex = currentlyActive[0].id - 1;
    const preIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[preIndex] = { ...newQuestions[preIndex], active: true };
    setQuestions(newQuestions);
  };

  const preButtonDisabled = () => {
    const currentlyActive = questions.filter(
      (question) => question.active === true
    );
    if (currentlyActive[0].id === 1) {
      return true;
    } else return false;
  };
  const nextButtonDisabled = () => {
    const currentlyActive = questions.filter(
      (question) => question.active === true
    );
    if (currentlyActive[0].id === questions.length) {
      return true;
    } else return false;
  };

  const clearEstimate = () => {
    setPlatforms([]);
    setFeatures([]);
    setCustomFeatures("");
    setUsers("");
    setCategory("");
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter(
      (question) => question.active === true
    );
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];
    const preSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    if (currentlyActive[0].subtitle === "Select one.") {
      if (preSelected[0]) {
        preSelected[0].selected = !preSelected[0].selected;
      }
    }
    newSelected.selected = !newSelected.selected;

    switch (newSelected.title) {
      case "Custom Software Development":
        if (matchesSM) {
          window.scrollTo(0, myRef.current.offsetTop - 90);
        }
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        clearEstimate();
        break;
      case "iOS/Android App Development":
        if (matchesSM) {
          window.scrollTo(0, myRef.current.offsetTop - 90);
        }
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        clearEstimate();
        break;
      case "Website Development":
        if (matchesSM) {
          window.scrollTo(0, myRef.current.offsetTop - 90);
        }
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        clearEstimate();
        break;
      default:
        setQuestions(newQuestions);
    }
  };

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];

      setUsers(userCost.title);

      cost -= userCost.cost;
      cost *= userCost.cost;
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    if (questions.length > 2) {
      let newPlatforms = [];

      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    if (questions.length > 2) {
      let newFeatures = [];

      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) =>
          option.map((newFeature) => newFeatures.push(newFeature.title))
        );

      setFeatures(newFeatures);
    }
  };

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;

      setCustomFeatures(newCustomFeatures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;

      setCategory(newCategory);
    }
  };

  const estimateDisabled = () => {
    const emptySelections = questions
      .filter(
        (question) => question.title !== "Which features do you expect to use?"
      )
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0);

    const featuresSelected = questions
      .filter(
        (question) => question.title === "Which features do you expect to use?"
      )
      .map((question) => question.options.filter((option) => option.selected))
      .filter((selection) => selection.length > 0);

    if (questions.length === 2) {
      if (emptySelections.length === 1) {
        return false;
      } else return true;
    } else if (questions.length === 1) {
      return true;
    } else if (emptySelections.length === 1 && featuresSelected.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  // form
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

  const [loading, setLoading] = useState(false);

  const [snackBar, setSnackbar] = useState({
    snackbarOpen: false,
    snackbarMessage: "",
    snackbarBackgroundColor: "",
  });

  //snack bar
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = form;
    const data = {
      total,
      service,
      platforms,
      features,
      customFeatures,
      users,
      category,
    };
    setLoading(true);
    axios
      .post("https://fir-a-company.firebaseio.com/estimate.json", data)

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
          snackbarMessage: "Your order had been sent!",
          snackbarBackgroundColor: "#4bb543",
        });
        clearEstimate();
        setQuestions(defaultQuestions);
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

  const softwareSelection = (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="/" />
        </Grid>

        <Grid item xs={10}>
          <Typography variant="body1">
            You want {service}{" "}
            {platforms.length > 0
              ? `for ${
                  //if only web application is selected...
                  platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 1
                    ? //then finish sentence here
                      "a Web Application."
                    : //otherwise, if web application and another platform is selected...
                    platforms.indexOf("Web Application") > -1 &&
                      platforms.length === 2
                    ? //then finish the sentence here
                      `a Web Application and an ${platforms[1]}.`
                    : //otherwise, if only one platform is selected which isn't web application...
                    platforms.length === 1
                    ? //then finish the sentence here
                      `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                    ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                    : //otherwise if all three are selected...
                    platforms.length === 3
                    ? //then finish the sentence here
                      "a Web Application, an iOS Application, and an Android Application."
                    : null
                }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="/" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
                features.length === 1
                ? //then end the sentence here
                  `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter((feature, index) => index !== features.length - 1)
                    //and for those features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 2
              ? //...and then finally add the last feature with 'and' in front of it
                ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        alignItems="center"
        style={{ marginBottom: "2em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="/" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            The custom feature will be of
            {customFeatures.toLowerCase()}
            {`, and the project will be used by about ${users} users.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelection = (
    <Grid
      container
      direction="column"
      style={{ marginTop: matchesMD ? "1em" : "10em" }}
    >
      <Grid item container direction="row" alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="/" />
        </Grid>

        <Grid item xs={10}>
          <Typography variant="body1">
            You want{" "}
            {category === "Basic"
              ? "a Basic Website."
              : `an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Container maxWidth="lg" className={classes.mainContainer}>
      <Grid container direction="row">
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography variant="h2">Estimate</Typography>
          </Grid>
          <Grid item>
            <img src={estimate} alt="" className={classes.image} />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          justify="center"
          style={{ marginTop: "6em", marginBottom: "6em" }}
          ref={myRef}
        >
          {questions
            .filter((question) => question.active)
            .map(({ id, title, subtitle, options }) => (
              <React.Fragment key={id}>
                <Grid item>
                  <Typography
                    variant="h3"
                    align="center"
                    style={{
                      fontWeight: 500,
                      fontSize: "2rem",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{
                      marginBottom: "2.5em",
                    }}
                  >
                    {subtitle}
                  </Typography>
                </Grid>
                {/* options */}
                <Grid item container direction="row" spacing={4}>
                  {options.map(
                    ({ id, title, icon, iconAlt, subtitle, selected }) => (
                      <Grid
                        item
                        container
                        direction="column"
                        alignItems="center"
                        md
                        key={id}
                        component={Button}
                        style={{
                          display: "grid",
                          textTransform: "none",
                          backgroundColor: selected
                            ? "rgb(251 228 171)"
                            : undefined,
                          borderRadius: 0,
                          marginBottom: matchesSM ? "1.5em" : 0,
                        }}
                        onClick={() => handleSelect(id)}
                      >
                        <Grid item style={{ maxWidth: "14em" }}>
                          <Typography
                            variant="h6"
                            align="center"
                            style={{ marginBottom: "1em" }}
                          >
                            {title}
                          </Typography>
                          <Typography variant="caption" align="center">
                            {subtitle}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img
                            src={icon}
                            alt={iconAlt}
                            className={classes.image}
                            style={{ maxWidth: "12em" }}
                          />
                        </Grid>
                      </Grid>
                    )
                  )}
                </Grid>
              </React.Fragment>
            ))}
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            style={{
              color: theme.palette.common.red,
              maxWidth: "14em",
              margin: "0.5em auto 1em",
            }}
          >
            <Grid item>
              <IconButton
                disabled={preButtonDisabled()}
                onClick={preQuestion}
                style={{
                  color: preButtonDisabled()
                    ? "#c7c7c7"
                    : theme.palette.common.red,
                  fontSize: "2rem",
                  cursor: preButtonDisabled() ? undefined : "pointer",
                }}
              >
                &#8592;
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={nextButtonDisabled()}
                onClick={nextQuestion}
                style={{
                  color: nextButtonDisabled()
                    ? "#c7c7c7"
                    : theme.palette.common.red,
                  fontSize: "2rem",
                  cursor: nextButtonDisabled() ? undefined : "pointer",
                }}
              >
                &#8594;
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container justify="center">
            <Button
              variant="contained"
              className={classes.estimateButton}
              onClick={() => {
                setDialog(true);
                getTotal();
                getPlatforms();
                getFeatures();
                getCustomFeatures();
                getCategory();
              }}
              disabled={estimateDisabled()}
            >
              Get Estimate
            </Button>
          </Grid>
        </Grid>
        <Dialog
          open={isDialogOpene}
          onClose={() => setDialog(false)}
          style={{ zIndex: 1302 }}
          fullScreen={matchesSM}
          fullWidth
          maxWidth="lg"
        >
          <Snackbar
            open={snackbarOpen}
            message={snackbarMessage}
            ContentProps={{
              style: { backgroundColor: snackbarBackgroundColor },
            }}
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
            <Grid container direction="column">
              <Grid item>
                <Typography
                  variant="h3"
                  align="center"
                  style={{ marginBottom: "1em" }}
                >
                  Estimate
                </Typography>
              </Grid>
              <Grid
                item
                container
                justify="space-around"
                direction={matchesSM ? "column" : "row"}
                alignItems={matchesSM ? "center" : undefined}
              >
                <Grid
                  item
                  container
                  direction="column"
                  md={7}
                  style={{ maxWidth: "20em" }}
                >
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
                      placeholder="Tell us more about your project"
                      required
                      value={message}
                      onChange={handleChange}
                      multiline
                      rows={6}
                      className={classes.message}
                      color="secondary"
                    />
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      paragraph
                      align={matchesSM ? "center" : undefined}
                    >
                      We can create this digital solution for an estimated{" "}
                      <span
                        style={{
                          color: theme.palette.common.orange,
                          fontWeight: 700,
                        }}
                      >
                        ${total.toFixed(2)}
                      </span>
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      align={matchesSM ? "center" : undefined}
                    >
                      Fill out your name, number, and email, place your request,
                      and we’ll get back to you with details moving forward and
                      a final price.
                    </Typography>
                  </Grid>
                </Grid>
                {/* right */}
                <Grid
                  item
                  container
                  direction="column"
                  md={5}
                  style={{ maxWidth: "30em" }}
                >
                  <Hidden smDown>
                    <Grid item>
                      {questions.length > 2
                        ? softwareSelection
                        : websiteSelection}
                    </Grid>
                  </Hidden>

                  <Grid
                    item
                    container
                    justify="center"
                    style={{
                      marginTop: " 2em",
                      marginBottom: matchesSM ? "2em" : 0,
                    }}
                  >
                    <Button
                      variant="contained"
                      className={classes.estimateButton}
                      onClick={handleSubmit}
                      disabled={
                        name === "" ||
                        message === "" ||
                        phoneHelper !== "" ||
                        emailHelper !== ""
                      }
                    >
                      {loading ? (
                        <CircularProgress size={30} color="inherit" />
                      ) : (
                        <>
                          Place Request&nbsp; &nbsp; <SendIcon />
                        </>
                      )}
                    </Button>
                  </Grid>
                  <Grid
                    item
                    container
                    justify="center"
                    style={{
                      marginTop: " 2em",
                    }}
                  >
                    <Button
                      style={{
                        marginBottom: matchesSM ? "2em" : 0,
                        fontWeight: "300",
                        color: "primary",
                      }}
                      onClick={() => setDialog(false)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Grid>
    </Container>
  );
};

export default EstimatePage;
