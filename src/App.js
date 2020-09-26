import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import Home from "./components/Home";
import About from "./components/About";
import OurPricing from "components/OurPricing";
import Contact from "components/Contact";
import Login from "pages/Login";
import Signup from "pages/Signup";
//import BlogIndex from "pages/BlogIndex";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/sign-up -page">
            <Signup />
          </Route>
          <Route path="/login-page">
            <Login />
          </Route>
          {/*<Route path="/our-blogs">
            <BlogIndex />
  </Route>*/}
          <Route path="/contact-us">
            <Contact />
          </Route>
          <Route path="/our-prices">
            <OurPricing />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
