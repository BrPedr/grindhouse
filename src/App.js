import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
import Footer from "./components/footer/Footer";

import "./App.css";

const AppBackground = styled.div`
  height: 100%;
  background-color: #1f0a42;
`;

const App = () => {
  return (
    <AppBackground>
      <Header />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
      <Footer />
    </AppBackground>
  );
};

export default App;
