import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';
import '../../App.css';

class IndexPage extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          You can see all examples that i faced while i was developing react applications. It s not just about
          react, this guide also contains es6, redux, redux-form, other react 3. party components etc. This is my 
          opensource notes.
        </p>
        <p><Link to='/state_change'>State change</Link></p>
      </div>
    );
  }
}

export default IndexPage;
