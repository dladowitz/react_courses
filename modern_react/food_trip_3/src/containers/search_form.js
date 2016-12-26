import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

import { findRoute } from '../actions/index.js';

class SearchForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    console.log('Sumbitting Form');
    console.log('Form Props: ', props);
    this.props.findRoute(props)
    // this.props.resetForm();
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
  { findRoute }
)(SearchForm);
