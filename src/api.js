import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b9fa4142eb69f9a6ca71110bed2e903e',
    language: 'en-US',
  },
});

export default api;
