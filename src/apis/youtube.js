import axios from 'axios';
const KEY = 'AIzaSyAHRfSWTFg_3SnOPbkXfB4zwDK6UHdwa28';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 3,
        key: KEY
    }
})