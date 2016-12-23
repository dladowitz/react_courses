import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index.js';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit.bind(this)}>
        <input
          placeholder='Get a city forecast'
          value={this.state.term}
          onChange={this.onInputChange.bind(this)}
          className='form-control'
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary"

          >Submit</button>
        </span>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
