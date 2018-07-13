import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <div>
    <h1>Change List Items Order</h1>

    <h2>Used:</h2>
    <p>State change</p>
    <p>Es6: Change object item order in array</p>
    <Link to="/change-list-order/app"><span className="arrows">Go to example ></span></Link>
  </div>
);

export default Index;
