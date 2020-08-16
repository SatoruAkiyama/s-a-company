import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

// page
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import CustomSoftwarePage from "./pages/CustomSoftwarePage";
import IOSandAndroidPage from "./pages/IOSandAndroidPage";
import WebsitePage from "./pages/WebsitePage";
import RevolutionPage from "./pages/RevolutionPage";

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
        <Route
          path="/services"
          render={() => (
            <ServicesPage
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          path="/custom-software"
          render={() => (
            <CustomSoftwarePage
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          path="/mobile-apps"
          render={() => (
            <IOSandAndroidPage
              setSelectedIndex={setSelectedIndex}
              setValue={setValue}
            />
          )}
        />
        <Route
          path="/web-sites"
          render={() => (
            <WebsitePage
              setValue={setValue}
              setSelectedIndex={setSelectedIndex}
            />
          )}
        />
        <Route
          path="/revolution"
          render={() => <RevolutionPage setValue={setValue} />}
        />
        <Route path="/about-us" component={() => <div>about</div>} />
        <Route path="/contact-us" component={() => <div>contact</div>} />
        <Route path="/estimate" component={() => <div>estimate</div>} />
      </Switch>
      <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
    </ThemeProvider>
  );
};

export default App;
