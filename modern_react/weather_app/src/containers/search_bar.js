import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateSearch } from '../actions/index.js';


class SearchBar extends Component {
  render() {
    console.log('SearchBar props: ', this.props);

    return (
      <div>
        <input
          value={this.props.term}
          onChange={(event) => this.props.updateSearch(event.target.value)}
        />
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSearch: updateSearch }, dispatch);
}

function mapStateToProps(state) {
  return {
    term: state.term
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
