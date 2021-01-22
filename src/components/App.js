import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import './App.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  //Utilizo el hook personalizado useVideos, inicializado con el término de búsqueda "bosque"

  const [videos, search] = useVideos('Bosque');

  //Entrego la información procesada por el hook personalizado a setSelectedVideo

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // SemanticUI para la creación de un menú prolijo por capas.

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
