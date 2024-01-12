
import axios from 'axios';
//key  735fbd884667da01e8981035415a35ab419e1fa4
// base url: https://api-ssl.bitly.com/v4/shorten

export const key ='735fbd884667da01e8981035415a35ab419e1fa4';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${key}`
    }
})


export default api;


