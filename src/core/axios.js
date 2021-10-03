import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:1337';

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axios;
