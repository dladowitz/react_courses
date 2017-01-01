import React, { Component } from 'react';

import CommentBox from './comment_box.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <CommentBox />
      </div>
    );
  }
}
