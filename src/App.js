import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import './scss/main.css';

import Header from './components/common/Header';
import LeftMenu from './components/common/LeftMenu';
import IndexPage from './components/indexPage/IndexPage';
import StateChange from './components/stateChange/StateChange';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <LeftMenu />
              </div>
              <div className="col-12 col-md-8">
                <Route exact path="/" component={IndexPage} />
                <Route exact path="/state_change" component={StateChange} />
              </div>
            </div>            
          </div>          
        </div>
      </Router>
    );
  }
}

export default App;
