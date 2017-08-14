import React, { Component } from 'react';
import products from './products.js';
import antennaVideo from './antenna-installation.mp4';

import ShopSidebar from './ShopSidebar.js';

export default class Antennas extends Component {
  render() {
    const cart32 = "https://www.cart32hosting.com/sheerwebhost/cart32.exe/winningedgesportscom-AddItem";

    return (
      <div id="antennas">
        <ShopSidebar />
        <p className="shop-title">Antennas</p>

        <p>All volleyball nets are not created equal. Nets vary in height even between nets of the same manufacturer and model. We have found them anywhere between 33 and 43 inches in height. Our Universal Antennas will fit this height range and all nets with visual boundries 4" and under. On a short net, some of the pocket may stick up above the net.</p>

        <p>Our universal antennas feature two piece 3/8" diameter white fiberglass antennas - the size recommended in the rulebook, with aluminum connectors. Using a two piece system keeps the broken down length at about 40". The Antennas will fit into most car trunks and can even be carried on and stored in the overhead bin when traveling by air. The lower sections have a vinyl tube at their base. It acts as a shock absorber. The upper, visible, antenna sections, have regulation width red stripes. They extend 32 to 34 inches above the net. The upper antenna sections slide into the pockets, with the lower sections, for storage.</p>

        <p>The 2 inch wide antenna pocket is made of the same webbing as our 400 series court lines. It has a hook and loop fasting system, for quick attachment. The main flaps go around the net. The contact areas of the main flaps have a rubber coating that grips the vinyl boundries. (Keeps the antennas from moving around) The "T" straps wrap around for extra holding power. Both the main flaps and "T" straps have hook and loop tape, providing over 7 square inches of contact area at each end of the pocket.</p>

        <p>Price is for one set (pair) of antennas.</p>

        <p>Universal Antenna - Price: $60 </p>


        <video width="320" height="240" controls>
          <source src={antennaVideo} type="video/mp4" />
        </video>

        <form method="GET" action={cart32}>
          <input type="hidden" name="PartNo" value="WES-UN3/8" />
          <input type="hidden" name="Item" value="Universal Antenna" />
          <input type="hidden" name="Qty" value="1" />
          <input type="hidden" name="Price" value="60" />
          <input type="submit" value="Add To Shopping Cart" />
        </form>

      </div>
    )
  }
}
