import axios from 'axios';

const API_URL = 'https://flare-message.onrender.com/api/user/';


const authService = {

    register: async (name, email, phone, password) => {
        const response = await axios.post(`${API_URL}register`, {
            name,
            email,
            phone,
            password
        });
        return response.data;
    },

    login: async (email, password) => {
        const response = await axios.post(`${API_URL}login`, {
            email,
            password
        });
        return response.data;
    }
};

export default authService;
