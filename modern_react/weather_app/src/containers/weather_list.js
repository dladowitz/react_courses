import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {
  renderWeather(cityData) {
    return (
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>{cityData.list[0].main.temp}</td>
        <td>{cityData.list[0].main.pressure}</td>
        <td>{cityData.list[0].main.humidity}</td>
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
            <th>Temp</th>
            <th>Pressure</th>
            <th>Hummidity</th>
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
