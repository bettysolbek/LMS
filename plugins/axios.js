import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:5000', 
  timeout: 50000, 
});

export default ({ app }, inject) => {
  inject('axios', instance);
};
