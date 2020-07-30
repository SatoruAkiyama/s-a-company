import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./ui/theme";
import Header from "./ui/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Switch>
        <Route exact path="/" component={() => <div>Hello</div>} />
        <Route path="/services" component={() => <div>services</div>} />
        <Route
          path="/custom-software"
          component={() => <div>custom-software</div>}
        />
        <Route path="/mobile-apps" component={() => <div>mobile-apps</div>} />
        <Route path="/web-site" component={() => <div>web-site</div>} />
        <Route path="/revolution" component={() => <div>revoluotion</div>} />
        <Route path="/about-us" component={() => <div>about</div>} />
        <Route path="/contact-us" component={() => <div>contact</div>} />
        <Route path="/estimate" component={() => <div>estimate</div>} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;
