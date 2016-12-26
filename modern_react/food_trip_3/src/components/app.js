import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Food Trip</h2>
        {this.props.children}
      </div>
    );
  }
}
