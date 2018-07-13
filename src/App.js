import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './scss/main.css';

import Header from './components/common/Header';
import LeftMenu from './components/common/LeftMenu';
import IndexPage from './components/indexPage/IndexPage';
import StateChange from './components/stateChange/StateChange';
import PostComment from './components/postComment/';
import ChangeListOrder from './components/changeListOrder';
import ChangeListOrderApp from './components/changeListOrder/ChangeListOrder';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-3">
                <LeftMenu />
              </div>
              <div className="col-12 col-md-9">
                <Route exact path="/" component={IndexPage} />
                <Route path="/state_change" component={StateChange} />
                <Route exact path="/post_comment" component={PostComment} />
                <Route exact path="/change-list-order" component={ChangeListOrder} />
                <Route exact path="/change-list-order/app" component={ChangeListOrderApp} />
              </div>
            </div>            
          </div>          
        </div>
      </Router>
    );
  }
}

export default App;
