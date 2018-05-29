import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

class LeftMenu extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <Fragment>
        <ul className="leftMenu">
          <li className={pathname === '/' ? 'active' : undefined}><Link to="/">Home</Link></li>        
          <li className={pathname === '/state_change' ? 'active' : undefined}><Link to="/state_change">State change</Link></li>        
        </ul>
      </Fragment>
    );
  }
}

export default withRouter(props => <LeftMenu {...props}/>);
