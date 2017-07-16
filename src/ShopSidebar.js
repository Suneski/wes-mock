import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <div id="shop-sidebar">
        <p><Link to="/volleyballs" className="link">Volleyballs</Link></p>
        <p><Link to="/beachapparel" className="link">Beach Apparel</Link></p>
        <p><Link to="/antennas" className="link">Antennas</Link></p>
        <p><Link to="/courtsystems" className="link">Court Systems</Link></p>
        <p><Link to="/anchorsystems" className="link">Anchor Systems</Link></p>
        <p><Link to="/careandrecovery" className="link">Care & Recovery</Link></p>
      </div>
    )
  }
}
