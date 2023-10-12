import axios from 'axios';

const API = axios.create({
  baseURL: 'http://192.168.7.111:3000/characters',
  headers: {},
});

export default API;
