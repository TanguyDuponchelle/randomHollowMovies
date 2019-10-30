import React from 'react';
import './VideoItem.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item__item'>
            <img className='ui-image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='video-item__content'>
                <div className='video-item__header '>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;