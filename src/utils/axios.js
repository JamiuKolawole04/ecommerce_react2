import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api-bane-ecommerce.herokuapp.com" // THE API (backend) URL
});

export default instance;