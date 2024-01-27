import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3000', 
  timeout: 10000, 
});

export default ({ app }, inject) => {
  inject('axios', instance);
};
