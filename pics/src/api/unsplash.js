import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID thSmbjER7fCFZue5rB0hmpisykKOwrPJAdx2x69qh68' 
    } 
})