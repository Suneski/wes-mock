import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

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

// routed components - shop categories
import Volleyballs from './Volleyballs.js';
import BeachApparel from './BeachApparel.js';
import Antennas from './Antennas.js';
import CourtSystems from './CourtSystems.js';
import AnchorSystems from './AnchorSystems.js';
import CareAndRecovery from './CareAndRecovery.js';

const newHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={newHistory}>
        <div className="App">
          <Navigation />
          <Announcements />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/faq" component={Faq} />
            <Route path="/shipping" component={Shipping} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            {/* Shop Routes */}
            <Route path="/volleyballs" component={Volleyballs} />
            <Route path="/beachapparel" component={BeachApparel} />
            <Route path="/antennas" component={Antennas} />
            <Route path="/courtsystems" component={CourtSystems} />
            <Route path="/anchorsystems" component={AnchorSystems} />
            <Route path="/careandrecovery" component={CareAndRecovery} />
            {/* <Route component={NotFound} /> */}
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
