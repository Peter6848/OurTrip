import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TripShow from './components/TripShow.js';
import Trips from './components/Trips';
import Itinerary from './Itinerary';
import App from './app';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="App" component={App} initial />
      <Scene key='TripList' component={Trips} />
      <Scene key='TripShow' component={TripShow} />
      <Scene key='Itinerary' component={Itinerary} />
    </Router>
  );
};

export default RouterComponent;