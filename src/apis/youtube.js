import axios from 'axios';

// clave "confidencial" creada en una cuenta dummy de google para el fin de esta aplicación de práctica.

const KEY = 'AIzaSyCA0SE8RhkFMY3KFY3et_Hbh18PvemaaOE';

// Parametros requeridos por la documentación de Google APIs

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
