import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <div>
    <h1>Change List Items Order</h1>

    <h2>Used:</h2>
    <p>State change</p>
    <p>Es6: Change object item order in array</p>
    <p>Es6: Delete - remove (filter) an item from array</p>
    <p>Es6: Delete - Mapping list</p>
    <p>Flipmove 3. party component</p>
    <Link to="/change-list-order/app"><span className="arrows">Go to example ></span></Link>
  </div>
);

export default Index;
