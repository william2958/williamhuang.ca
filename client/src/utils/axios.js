import axios from 'axios';

let instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://williamhuang.uc.r.appspot.com/api/'
        : '/api/',
});

export default instance;
