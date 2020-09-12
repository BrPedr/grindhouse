import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/header/Header";
import Homepage from "./pages/homepage/Homepage";
// import Footer from "./components/footer/Footer";

const AppBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #1f0a42;
`;

const App = () => {
  return (
    <AppBackground>
      <Header />
      <Switch>
        <Route path="/" exact component={Homepage} />
        {/* <div className="footer-container">
        <Footer />
      </div> */}
      </Switch>
    </AppBackground>
  );
};

export default App;
