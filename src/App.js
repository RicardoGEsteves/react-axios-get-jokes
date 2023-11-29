import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Jokes from "./components/Jokes";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";

import "./styles/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Route exact path="/" component={Landing} />
          <Route exact path="/jokes" component={Jokes} />
          <Route exact path="/contacts" component={Contacts} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// test
// Path: src/components/Navigation.js
