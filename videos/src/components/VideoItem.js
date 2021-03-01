/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './videoItem.css'
const VideoItem = ({video , onVideoSelect}) => {
    return (
        <div onClick={onVideoSelect} className="video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
               <div className="header"> {video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;