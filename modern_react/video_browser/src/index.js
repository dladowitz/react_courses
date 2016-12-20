import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';
import EnvVar from '../.env.js';

// props arve available everywhere on a class based component. They don't need to be passed in.
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'tiger cubs'
     };

     this.videoSearch(this.state.term);
  }

  videoSearch(term) {
    YTSearch({ key: EnvVar.YOUTUBE_API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      console.log('State: ', this.state);
    });
  }

  render() {
    console.log('Index state: ', this.state)

    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    return (
      <div>
        Video Player
        <br />
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo: selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
