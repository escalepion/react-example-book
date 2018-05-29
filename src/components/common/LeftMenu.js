import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>        
        <li><Link to="/state_change">State change</Link></li>        
      </ul>
    </div>
  );
}

export default LeftMenu;
