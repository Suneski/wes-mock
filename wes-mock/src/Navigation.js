import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <img src="logo.gif" alt="logo"/>
        <ol>
          <li>Shop</li>
          <li>FAQ</li>
          <li>Shipping</li>
          <li>About Us</li>
          <li>Contact</li>
        </ol>
      </nav>
    )
  }
}
