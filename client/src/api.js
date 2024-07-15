import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Replace with your local server URL
    withCredentials: true,
});

export default api;
