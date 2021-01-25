import React from 'react';
import Cosmic from 'cosmicjs';


import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import AllStops from './containers/AllStops';
import SiteNavigation from './components/SiteNavigation';
import GlobalStyle from './components/GlobalStyle';

import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <SiteNavigation />
        <Switch>
          <Route path="/om-oss" component={AboutContainer} />
          <Route path="/alle-stopp" component={AllStops} />
          <Route path="/" component={HomeContainer} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;