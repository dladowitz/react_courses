import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {
  bookInfo(attribute) {
    if (this.props.book) {
      if (attribute === 'title') {
        return this.props.book.title;
      }

      return this.props.book.pages;
    }

    if (attribute === 'title') {
      return 'Young Frankenstein';
    }
    return 101;
  }

  bookPageNum() {

  }

  render() {
    return (
      <div>
        <div>Title: {this.bookInfo('title')}</div>
        <div>Pages: {this.bookInfo('pageNum')}</div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetails);
