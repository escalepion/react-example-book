import React, { Component, Fragment } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class LeftMenu extends Component {
  constructor() {
    super();
    this.activeClassName = 'active';
  }
  render() {
    return (
      <Fragment>
        <ul className="leftMenu">
          <li><NavLink exact activeClassName={this.activeClassName} to='/'>Home</NavLink></li>
          <li><NavLink activeClassName={this.activeClassName} to='/state_change'>State Change</NavLink></li>       
          <li><NavLink activeClassName={this.activeClassName} to='/post_comment'>Add Infinity Nested Comments (Redux)</NavLink></li>               
          <li><NavLink activeClassName={this.activeClassName} to='/change-list-order'>Change List Item Orders</NavLink></li>     
          <li><NavLink activeClassName={this.activeClassName} to='/promise'>Promise Example</NavLink></li>     
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(props => <LeftMenu {...props}/>);
