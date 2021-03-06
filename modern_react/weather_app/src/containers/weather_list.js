import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart.js';
import GoogleMap from '../components/google_map.js';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const humidity = cityData.list.map((weather) => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={name}>
        {/* <td>{name}</td> */}
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='red' units='K' /></td>
        <td><Chart data={pressure} color="green" units='hPa' /></td>
        <td><Chart data={humidity} color="blue" units='%' /></td>
      </tr>
    );
  }

  render() {
    console.log('WeatherList props: ', this.props);

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapStateToProps for WeatherList');
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
