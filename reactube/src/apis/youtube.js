import axios from 'axios';

const KEY = 'AIzaSyBSyvRNDH7nV1g4mc2CETnU3qQIp2J8ShQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});