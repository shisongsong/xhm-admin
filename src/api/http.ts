import { readToken } from '@/utils/localStorage';
import axios from 'axios';

const http = axios.create({
    baseURL: 'https://bookish-goggles-jjx54vjqx77hpqgx-5000.app.github.dev',
    timeout: 5000,
});

http.interceptors.request.use(
    (config) => {
        let token = readToken()
        config.headers!['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        return Promise.reject(error);
    },
);

export default http;
