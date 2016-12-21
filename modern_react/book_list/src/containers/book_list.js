import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index.js';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className='list-group-item'
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// Send redux state in as an argument.
// A hash is returned and injected into the component's props
// now this.props.books == reducx_state.books

// If redux state ever changes entire container is rerendered
function mapStateToProps(state) {
  return {
    books: state.books
  };
}

// Connects action creator return value to reducers. (Dispatches action object to reducers)
// Also connects action creator method to props so can be called in the container
// this.props.selectBook is the selectBook function
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// This creates a container by exporting the result of running mapStateToProps and mapDispatchToProps on BookList
// Basically this is like how the asset pipeline combines a bunch of files and outputs one for use.
// The Container is a combination of the component connected to application state, action creators and reducers.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
