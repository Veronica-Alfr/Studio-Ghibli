import axios from 'axios';

const API = axios.create({
  baseURL: 'https://ghibliapi.herokuapp.com',
});

export default API;
