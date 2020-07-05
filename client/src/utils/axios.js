import axios from 'axios';

let instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://williamhuang.uc.r.appspot.com/api'
        : 'http://localhost:8000/api',
});

export default instance;
