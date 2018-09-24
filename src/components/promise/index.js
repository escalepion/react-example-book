import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
  <div>
    <h1>Promise , Async Example</h1>

    <h2>Used:</h2>
    <p>Promises</p>
    <Link to="/promise/app"><span className="arrows">Go to example ></span></Link>
  </div>
);

export default Index;
