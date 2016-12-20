import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>
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

// This creates a container by exporting the result of running mapStateToProps on BookList
export default connect(mapStateToProps)(BookList);
