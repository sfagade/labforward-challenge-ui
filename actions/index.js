import axios from 'axios';

const BASE_URL = "http://localhost:8182";

export const frequencyCheck = (formData) => {

    return axios.post(`${BASE_URL}/api/notebooks`, formData)
            .then(res => res.data);
}
