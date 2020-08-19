import React, { useState, lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/theme";
import Header from "./ui/Header";
import Footer from "./ui/Footer";

import ErrorBoundary from "./error-boundary/ErrorBoundary";
import ScrollTop from "./scroll-top/ScrollTop";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  const LandingPage = lazy(() => import("./pages/LandingPage"));
  const ServicesPage = lazy(() => import("./pages/ServicesPage"));
  const CustomSoftwarePage = lazy(() => import("./pages/CustomSoftwarePage"));
  const IOSandAndroidPage = lazy(() => import("./pages/IOSandAndroidPage"));
  const WebsitePage = lazy(() => import("./pages/WebsitePage"));
  const RevolutionPage = lazy(() => import("./pages/RevolutionPage"));
  const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
  const ContacuUsPage = lazy(() => import("./pages/ContactUsPage"));
  const EstimatePage = lazy(() => import("./pages/EstimatePage"));
  const ErrorPage = lazy(() => import("./pages/ErrorPage"));

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
          <Suspense fallback={<div style={{ minHeight: "100vh" }}></div>}>
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
                exact
                path="/services"
                render={() => (
                  <ServicesPage
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
              <Route
                exact
                path="/custom-software"
                render={() => (
                  <CustomSoftwarePage
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
              <Route
                exact
                path="/mobile-apps"
                render={() => (
                  <IOSandAndroidPage
                    setSelectedIndex={setSelectedIndex}
                    setValue={setValue}
                  />
                )}
              />
              <Route
                exact
                path="/web-sites"
                render={() => (
                  <WebsitePage
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                  />
                )}
              />
              <Route
                exact
                path="/revolution"
                render={() => <RevolutionPage setValue={setValue} />}
              />
              <Route
                exact
                path="/about-us"
                render={() => <AboutUsPage setValue={setValue} />}
              />
              <Route
                exact
                path="/contact-us"
                render={() => <ContacuUsPage setValue={setValue} />}
              />
              <Route exact path="/estimate" component={EstimatePage} />
              <Route render={() => <ErrorPage />} />
            </Switch>
            <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
          </Suspense>
        </ErrorBoundary>
      </ScrollTop>
    </ThemeProvider>
  );
};

export default App;
