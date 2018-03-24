import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React Exapmles Guide</h1>
            <p><Link to='/'>Home</Link></p>
        </header>
    );
};

export default Header;