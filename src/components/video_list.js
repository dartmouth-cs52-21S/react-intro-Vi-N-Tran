import React from 'react';
import { connect } from 'react-redux';

import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />;
  });

  return (
    <ul>
      {videoItems}
    </ul>
  );
};

const mapStateToProps = (reduxState) => ({
  videos: reduxState.video.list,
});

export default connect(mapStateToProps, null)(VideoList);
