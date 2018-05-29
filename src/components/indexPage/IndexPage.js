import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <p>
          You can see all examples that i faced while i was developing react
          applications. It s not just about react, this guide also contains es6,
          redux, redux-form, other react 3. party components etc. This is my
          opensource notes.
        </p>
        <p>
          <Link to="/state_change">State change</Link>
        </p>
      </Fragment>
    );
  }
}

export default IndexPage;
