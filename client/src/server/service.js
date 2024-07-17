import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/services/services';

const getServices = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export default {
    getServices,
}