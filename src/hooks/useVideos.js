import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

// Hook personalizado, cuya función es crear la solicitud de red y devolver la información
// correspondiente.

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // solicitud asyncronica debido a que las solicitudes a APIS no son instantaneas.

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
