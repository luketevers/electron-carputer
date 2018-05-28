/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PlayPage from './containers/PlayPage';
import MapPage from './containers/MapPage';
import OBDPage from './containers/OBDPage';
import SoundPage from './containers/SoundPage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/map" component={MapPage} />
      <Route path="/play" component={PlayPage} />
      <Route path="/OBD" component={OBDPage} />
      <Route path="/sound" component={SoundPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
