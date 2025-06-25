import axios from 'axios';
console.log(process.env)
export default axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/api",
    headers: {
        'Content-Type': 'application/json'
    }
})