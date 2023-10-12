import axios from 'axios';

const instance2 = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default instance2;
