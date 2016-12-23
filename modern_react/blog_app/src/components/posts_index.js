import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchPosts } from '../actions/index.js';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('PostsIndex props: ', this.props);
    return (
      <div>
        Posts
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('application state: ', state);
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
// }
//
//
// export default connect(null, mapDispatchToProps)(SearchBar);
