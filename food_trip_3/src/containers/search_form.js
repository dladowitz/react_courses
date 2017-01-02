// http://stackoverflow.com/questions/17283826/how-to-to-get-places-e-g-gas-stations-along-route-between-origin-and-destinati

import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { fetchDirections } from '../actions/index.js';
import { GOOGLE_API_KEY } from '../../.env.js'

class SearchForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    console.log('Sumbitting Form with Props: ', props);
    this.props.fetchDirections(props)
    // this.props.resetForm();
  }

  componentWillMount() {
    this.addGoogleMapsScript();
  }

  addGoogleMapsScript() {
    const script = document.createElement('script');

    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    console.log('search form props: ', this.props);
    const { fields: { start, destination, end }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h4>Find Food Along Your Route</h4>

        <div className={`form-group ${start.touched && start.invalid ? 'has-danger' : ''}`}>
          <label>Start</label>
          <input type="text" className="form-control" {...start} />
          <div className="text-help">
            {start.touched ? start.error : ''}
          </div>
        </div>

        <div className={`form-group ${destination.touched && destination.invalid ? 'has-danger' : ''}`}>
          <label>Destination</label>
          <input type="text" className="form-control" {...destination} />
          <div className="text-help">
            {destination.touched ? destination.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Search</button>
        <Link to="/" className="btn btn-danger m-l-10">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.start) {
    errors.start = 'Enter a starting address';
  }
  if (!values.destination) {
    errors.destination = 'Enter a destination address';
  }
  return errors;
}

function mapStateToProps(state) {
  return {
    route: state.route
  };
}
// takes the place of connect, but with three arguments
export default reduxForm(
  { form: 'SearchForm', fields: ['start', 'destination'], validate },
  mapStateToProps,
  { fetchDirections }
)(SearchForm);
