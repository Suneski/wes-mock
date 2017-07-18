import React, { Component } from 'react';
import products from './products.js';

import ShopSidebar from './ShopSidebar.js';
import VolleyballProducts from './VolleyballProducts.js';

export default class Volleyballs extends Component {
  render() {
    const cart32 = "https://www.cart32hosting.com/sheerwebhost/cart32.exe/winningedgesportscom-AddItem";

    let volleyballProducts = products.volleyballs.map((x, i) => <VolleyballProducts
      key={i}
      category={x.category}
      productName={x.productName}
      productDesc={x.productDesc}
      partNo={x.partNo}
      item={x.item}
      price={x.price}
      img={x.img}
    />);

    return (
      <div id="volleyballs">
        <ShopSidebar />
        <p className="shop-title">Volleyballs</p>
        <ul>
          {volleyballProducts}
        </ul>
      </div>
    )
  }
}
