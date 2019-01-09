
import axios from 'axios';

// Creates a new instance of axios client
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 
            'Client-ID e8867b2f18cbdcdf6f37e5723daf16953b79b7a2af4e482b38747d542ec88982' // public key for demo purpose
    }
});