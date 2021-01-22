import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Cargando..</div>;
  }

  // interpolación de variables con template literals, siendo la variable el ID del video
  // proveniente de la solucitud de red de axios.

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    // se utiliza semantic UI para crear una interfaz prolija donde mostrar el video seleccionado
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
