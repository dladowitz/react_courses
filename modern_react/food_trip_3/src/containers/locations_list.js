import React, { Component } from 'react';
import { connect } from 'react-redux';

import { GOOGLE_API_KEY } from '../../.env.js'
import { getLocationsFromRoute } from '../actions/index.js';

class LocationsList extends Component {
  componentWillMount() {
    this.props.getLocationsFromRoute();
    this.addGoogleMapsScript();
  }

  addGoogleMapsScript() {
    const script = document.createElement('script');

    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`;
    script.async = true;
    document.body.appendChild(script);
  }

  renderLocations() {
    if (this.props.route.locations && this.props.route.locations.length > 0) {
      return this.props.route.locations.map((location) => {
        return (
          <li className='list-group-item'>{location}</li>
        );
      });
    }

    return <li className='list-group-item'>No Locations Found</li>;
  }

  render() {
    console.log('Locations List Props: ', this.props);
    return (
      <div className='locations-list-container'>
        <h4>Locations</h4>
        <ul className='list-group'>
          {this.renderLocations()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    route: state.route
  };
}

export default connect(mapStateToProps, { getLocationsFromRoute })(LocationsList);
