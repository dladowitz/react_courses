import React, { Component } from 'react';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: 'Add A Comment' };
  }

  // This is equivalent to inline anonymous function
  onHandleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form
        className='comment-box'
        onSubmit={this.handleSubmit.bind(this)}
      >
        <textarea
          value={this.state.comment}
          // onChange={this.onHandleChange.bind(this)}
          onChange={(event) => this.setState({ comment: event.target.value })}
        />

        <button action="submit">Save</button>
      </form>
    );
  }
}

export default CommentBox;
