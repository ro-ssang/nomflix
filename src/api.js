import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'b9fa4142eb69f9a6ca71110bed2e903e',
    language: 'en-US',
  },
});

export const tvApi = {
  airingToday: () => api.get('tv/airing_today'),
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  search: (term) => api.get('search/tv', { params: { query: encodeURIComponent(term) } }),
  showDetail: (id) => api.get(`tv/${id}`, { params: { append_to_response: 'video' } }),
};

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  search: (term) => api.get('search/movie', { params: { query: encodeURIComponent(term) } }),
  movieDetail: (id) => api.get(`movie/${id}`, { params: { append_to_response: 'video' } }),
};
