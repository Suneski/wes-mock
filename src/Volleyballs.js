import React, { Component } from 'react';
import products from './products.js';

import ShopSidebar from './ShopSidebar.js';

const productName = products[0].productName;

export default class Volleyballs extends Component {
  render() {
    const cart32 = "https://www.cart32hosting.com/sheerwebhost/cart32.exe/winningedgesportscom-AddItem";

    return (
      <div id="volleyballs">
        <ShopSidebar />
        <p>Volleyballs</p>
        <p>{productName}</p>
        <form method="GET" action={cart32}>
          <input type="hidden" name="PartNo" value="VLS300" />
          <input type="hidden" name="Item" value="Mikasa Beach Champ VLS300" />
          <input type="hidden" name="Qty" value="1" />
          <input type="hidden" name="Price" value="53.00" />
          <input type="submit" value="Add To Shopping Cart" />
        </form>
      </div>
    )
  }
}
