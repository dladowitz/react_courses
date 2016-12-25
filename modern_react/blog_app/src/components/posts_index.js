import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchPosts } from '../actions/index.js';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    this.props.posts.all.map((post) => {
      console.log(post.title);
      return <li key={post.id}>Title</li>;
    });
  }

  render() {
    console.log('PostsIndex props: ', this.props);
    const allPosts = this.props.posts.all.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`}>
            <h5>Title: {post.title}</h5>
            <div>Categories: {post.categories}</div>
          </Link>
        </li>
      );
    });

    return (
      <div>
        <h3>All Posts</h3>
        <div>
          <ul className="list-group">
            {allPosts}
          </ul>
        </div>

        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add New Post
          </Link>
        </div>
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
