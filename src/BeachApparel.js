import React, { Component } from 'react';
import products from './products.js';

import ShopSidebar from './ShopSidebar.js';

export default class BeachApparel extends Component {
  render() {
    const cart32 = "https://www.cart32hosting.com/sheerwebhost/cart32.exe/winningedgesportscom-AddItem";

    return (
      <div id="beach-apparel">
        <ShopSidebar />
        <p>Beach Apparel</p>
      </div>
    )
  }
}
