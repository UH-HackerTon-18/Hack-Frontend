import axios from 'axios';

const instance2 = axios.create({
  baseURL: 'http://192.168.7.115:3000/characters',
});

export default instance2;
