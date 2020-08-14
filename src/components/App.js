import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Header
        value={value}
        setValue={setValue}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <LandingPage
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route path="/services" component={() => <div>services</div>} />
        <Route
          path="/custom-software"
          component={() => <div>custom-software</div>}
        />
        <Route path="/mobile-apps" component={() => <div>mobile-apps</div>} />
        <Route path="/web-sites" component={() => <div>web-site</div>} />
        <Route path="/revolution" component={() => <div>revoluotion</div>} />
        <Route path="/about-us" component={() => <div>about</div>} />
        <Route path="/contact-us" component={() => <div>contact</div>} />
        <Route path="/estimate" component={() => <div>estimate</div>} />
      </Switch>
      <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </ThemeProvider>
  );
};

export default App;
