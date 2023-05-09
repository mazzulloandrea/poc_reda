import axios from 'axios';

const request = axios.create({
  baseURL: 'https://random-data-api.com/api/users/random_user',
});

export default request;
