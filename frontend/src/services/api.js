import axios from 'axios';


export const fetchMessage = async () => {
    try {
        const response = await axios.get(`/`); 
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
