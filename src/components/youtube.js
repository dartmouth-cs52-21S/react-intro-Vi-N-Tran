import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../style.scss';
import debounce from 'lodash.debounce';
import youtubeSearch from '../youtube-api';

import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

import { setVideos } from '../actions';

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.search = debounce(this.search, 300);
    this.search('pixar');
  }

  search = (text) => {
    youtubeSearch(text).then((videos) => {
      this.props.setVideos(videos);
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchChange={this.search} />
        <div id="video-section">
          <VideoDetail />
          <VideoList />
        </div>
      </div>
    );
  }
}

export default connect(null, { setVideos })(Youtube);
