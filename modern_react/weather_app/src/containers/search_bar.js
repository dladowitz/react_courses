import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getForecast } from '../actions/index.js';


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
    this.props.getForecast(this.state.term);
  }

  render() {
    // console.log('SearchBar props: ', this.props);
    // console.log('SearchBar state: ', this.state);
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
  return bindActionCreators({ getForecast: getForecast }, dispatch);
}


export default connect(null, mapDispatchToProps)(SearchBar);
