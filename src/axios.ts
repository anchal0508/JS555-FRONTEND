import axios from "axios";

const BASEURL = "https://js555-backend.onrender.com/api";
// const BASEURL = 'http://localhost:3000/api';
const API = axios.create({
    baseURL: BASEURL,
    withCredentials: true
});


API.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 401){
            console.log(error.response?.data?.message || "Error: Axios Error-------");
            window.location.href = "/login"; 
        }
        return Promise.reject(error);
    }
);

export default API;

