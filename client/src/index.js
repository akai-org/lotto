import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { injectGlobal } from 'emotion';
import * as serviceWorker from './serviceWorker';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import SettingsScreen from './pages/SettingsScreen';
import AchievementsScreen from './pages/AchievementsScreen';
import GameScreen from './pages/GameScreen';
import MapScreen from './pages/MapScreen';

injectGlobal`
  * {
    box-sizing: border-box;
    margin: 0px;
  }
`;

render(
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/settings" component={SettingsScreen} />
        <Route path="/achievements" component={AchievementsScreen} />
        <Route path="/game" component={GameScreen} />
        <Route path="/map" component={MapScreen} />
      </Switch>
    </Router>
  </Fragment>,
  document.getElementById('root')
);
serviceWorker.unregister();
