import axios from 'axios';

const instance = axios.create({
    baseURL: "https://devat-ecommerce-api.onrender.com" // THE API (backend) URL
});

export default instance;
