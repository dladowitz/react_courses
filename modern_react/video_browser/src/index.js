import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';

const API_KEY = 'AIzaSyCae9rBWFqOXviUYTU1qB0XHmL1y5NMiMM';

// props arve available everywhere on a class based component. They don't need to be passed in.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
      console.log('State: ', this.state);
    });
  }


  render() {
    return (
      <div>
        Video Player
        <br />
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
