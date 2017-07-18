import React, { Component } from 'react';
import products from './products.js';

export default class Volleyballs extends Component {
  render() {
    const cart32 = "https://www.cart32hosting.com/sheerwebhost/cart32.exe/winningedgesportscom-AddItem";

    return (
      <li id="volleyball-products" className="products-li">
        <p>{this.props.productName} - ${this.props.price}</p>
        <img src={this.props.image} alt={this.props.item} />
        <p>{this.props.productDesc}</p>


        <form method="GET" action={cart32}>
          <input type="hidden" name="PartNo" value={this.props.partNo} />
          <input type="hidden" name="Item" value={this.props.item} />
          <input type="hidden" name="Qty" value="1" />
          <input type="hidden" name="Price" value={this.props.price} />
          <input type="submit" value="Add To Shopping Cart" />
        </form>
      </li>
    )
  }
}
