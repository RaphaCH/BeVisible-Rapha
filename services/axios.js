import axios from 'axios';
import {parseCookies} from 'nookies';

export function getApiClient(context) {
    const {'beVisible.token': token} = parseCookies(context);
    


    const api = axios.create({
        'baseURL': 'http://localhost:3000',
    });

    api.interceptors.request.use(config => {
        return config
    })

    if(token) {
        api.defaults.headers['Authorization'] = `Bearer ${token}`
    }

    return api
}
