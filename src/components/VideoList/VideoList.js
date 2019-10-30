import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import './Videolist.css'

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map(video => {
    return (
      <div className="VideoList__video">
        <VideoItem
          key={video.id.videoId}
          video={video}
          handleVideoSelect={handleVideoSelect}
        />
      </div>
    );
  });

  return (
    <div className="VideoList">
      <div className="VideoList__singleVideo">{renderedVideos}</div>
    </div>
  );
};
export default VideoList;
