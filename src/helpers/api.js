import axios from 'axios';
const api = axios.create({
    baseURL : 'https://klar-back.onrender.com/'
});
export default api;