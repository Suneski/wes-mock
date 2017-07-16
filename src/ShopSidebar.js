import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <div id="shop-sidebar">
        <p><Link to="/volleyballs" className="link">Volleyballs</Link></p>
        <p>Beach Apparel</p>
        <p>Court Line Systems</p>
        <ol>
          <li>Antennas</li>
          <li>Court Systems</li>
          <li>Anchor Systems</li>
        </ol>
        <p>Care and Recovery</p>
      </div>
    )
  }
}
