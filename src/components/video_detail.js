import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>loading...</div>;
  }
  const { videoId } = video.id; // will give linting error - read it and decide for yourself
  // {videoId} = video.id // is example of destructuring
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div id="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={video.snippet.title} />
      </div>
      <div className="details">
        <div><h2>{video.snippet.title}</h2></div>
        <div><p>{video.snippet.description}</p></div>
      </div>
    </div>
  );
};

export default VideoDetail;
