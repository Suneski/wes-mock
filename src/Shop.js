import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';

import ShopSidebar from './ShopSidebar.js';

import Volleyballs from './Volleyballs.js';

export default class Contact extends Component {
  render() {
    return (
      <div id="shop">
        <ShopSidebar />
      </div>
    )
  }
}
