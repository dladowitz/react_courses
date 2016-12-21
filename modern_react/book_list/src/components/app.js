import React, { Component } from 'react';
import BookList from '../containers/book_list.js';
import BookDetails from '../containers/book_details.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter</div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}
