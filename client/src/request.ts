import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL as string;
const token = import.meta.env.VITE_API_TOKEN as string;
console.log('Im here at axios');
export const request = axios.create({
    baseURL,
    headers: {
        Authorization: 'bearer ' + token,
    },
});