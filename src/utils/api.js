import axios from 'axios';

const api = axios.create({
  // baseURL: 'https://api.nomain.rajasabiq.me/api/',
  baseURL: 'http://localhost:5000/api/',
});

api.interceptors.request.use((request) => {
  // document.querySelector('.overlay').style.display = 'block';
  return request;
});

api.interceptors.response.use(
  (response) => {
    // document.querySelector('.overlay').style.display = 'none';
    return response;
  },
  (error) => {
    // document.querySelector('.overlay').style.display = 'none';
    // errorToast(error.response.data.message);
    return Promise.reject(error);
  }
);

export default api;
