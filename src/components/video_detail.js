import React from 'react';
import { connect } from 'react-redux';

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return <div>loading...</div>;
  }
  const { videoId } = props.selectedVideo.id; // will give linting error - read it and decide for yourself
  // {videoId} = video.id // is example of destructuring
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={props.selectedVideo.snippet.title} />
      </div>
      <div className="details">
        <div><h2>{props.selectedVideo.snippet.title}</h2></div>
        <div><p>{props.selectedVideo.snippet.description}</p></div>
      </div>
    </div>
  );
};

const mapStateToProps = (reduxState) => ({
  selectedVideo: reduxState.video.selected,
});

export default connect(mapStateToProps, null)(VideoDetail);
