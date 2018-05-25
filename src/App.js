import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './scss/main.css';

import Header from './components/common/Header';
import IndexPage from './components/indexPage/IndexPage';
import StateChange from './components/stateChange/StateChange';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/state_change" component={StateChange} />
          </div>          
        </div>
      </Router>
    );
  }
}

export default App;
