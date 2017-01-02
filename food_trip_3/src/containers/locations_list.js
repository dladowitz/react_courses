import React, { Component } from 'react';
import { connect } from 'react-redux';


class LocationsList extends Component {
  renderDirections() {
    if (this.props.route.steps && this.props.route.steps.length > 0) {
      return this.props.route.steps.map((step) => {
        return (
          <li
            key={step.start_location.lat()}
            className='list-group-item'
          >
            {step.start_location.lat()}
          </li>
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
          {this.renderDirections()}
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

export default connect(mapStateToProps)(LocationsList);
