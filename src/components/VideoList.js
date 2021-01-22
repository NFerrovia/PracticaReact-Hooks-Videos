import React from 'react';
import VideoItem from './VideoItem';

// se utiliza el ID del video como llave de identificacion de los videos, debido a que react
// requiere que cada objeto tenga una llave, y el ID nunca va a ser duplicado.

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div className="ui relaxed divided list"> {renderedList}</div>;
};

export default VideoList;
