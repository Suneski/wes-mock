import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Navigation from './Navigation.js';
import Announcements from './Announcements.js';
import Footer from './Footer.js';

// routed components
import Home from './Home.js';
import Shop from './Shop.js';
import Faq from './Faq.js';
import Shipping from './Shipping.js';
import Contact from './Contact.js';
import About from './About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Announcements />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/faq" exact component={Faq} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            {/* <Route component={NotFound} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
