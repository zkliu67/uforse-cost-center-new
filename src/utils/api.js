import axios from 'axios';

const api = axios.create({
  baseURL: 'https://guarded-gorge-58939.herokuapp.com/api/v1'
});

export default api;