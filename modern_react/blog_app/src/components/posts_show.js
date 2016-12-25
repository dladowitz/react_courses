import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { fetchPost, deletePost } from '../actions/index.js';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  deletePost() {
    console.log('Deleting Post: ', this.props.post.id);
    this.props.deletePost(this.props.post.id)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    const post = this.props.post;

    if (!post) {
      return <div>Loading posts.....</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/" className='btn btn-primary'>View All Posts</Link>
        <button onClick={this.deletePost.bind(this)} className="btn btn-danger delete-button">Delete</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts.post
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
