import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

import ErrorBoundary from "./error-boundary/ErrorBoundary";
import ScrollTop from "./scroll-top/ScrollTop";

// page
import LandingPage from "./pages/LandingPage";
import ServicesPage from "./pages/ServicesPage";
import CustomSoftwarePage from "./pages/CustomSoftwarePage";
import IOSandAndroidPage from "./pages/IOSandAndroidPage";
import WebsitePage from "./pages/WebsitePage";
import RevolutionPage from "./pages/RevolutionPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContacuUsPage from "./pages/ContactUsPage";
import EstimatePage from "./pages/EstimatePage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <ScrollTop>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <ErrorBoundary>
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
            <Route exact
              path="/services"
              render={() => (
                <ServicesPage
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route exact
              path="/custom-software"
              render={() => (
                <CustomSoftwarePage
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route exact
              path="/mobile-apps"
              render={() => (
                <IOSandAndroidPage
                  setSelectedIndex={setSelectedIndex}
                  setValue={setValue}
                />
              )}
            />
            <Route exact
              path="/web-sites"
              render={() => (
                <WebsitePage
                  setValue={setValue}
                  setSelectedIndex={setSelectedIndex}
                />
              )}
            />
            <Route exact
              path="/revolution"
              render={() => <RevolutionPage setValue={setValue} />}
            />
            <Route exact
              path="/about-us"
              render={() => <AboutUsPage setValue={setValue} />}
            />
            <Route exact
              path="/contact-us"
              render={() => <ContacuUsPage setValue={setValue} />}
            />
            <Route exact path="/estimate" component={EstimatePage} />
            <Route render={() => <ErrorPage />} />
          </Switch>
        </ErrorBoundary>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </ScrollTop>
    </ThemeProvider>
  );
};

export default App;
