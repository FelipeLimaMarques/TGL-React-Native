import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://10.0.2.2:3333',
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
});

export default instance;