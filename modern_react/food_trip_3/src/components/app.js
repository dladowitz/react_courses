import React, { Component } from 'react';

import StartEndForm from '../containers/start_end_form.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Food Trip</h2>
        <StartEndForm />
        {/* <PlacesList />
        <RouteMap /> */}
      </div>
    );
  }
}
