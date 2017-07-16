import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

import Logo from './images/logo.gif';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <Link to="/"><img src={Logo} alt="logo"/></Link>
        <ol>
          <li><Link to="/shop" className="link">Shop</Link></li>
          <li><Link to="/faq" className="link">FAQ</Link></li>
          <li><Link to="/shipping" className="link">Shipping</Link></li>
          <li><Link to="/about" className="link">About Us</Link></li>
          <li><Link to="/contact" className="link">Contact</Link></li>
        </ol>
      </nav>
    )
  }
}
