import axios from 'axios';

const baseURL = `https://hostel-cleaner-backend.onrender.com
`;




export const register = async (formData) => {
    const token = localStorage.getItem('isUserExist');
    const res = await axios.post(`${baseURL}/auth/register`, formData, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    const data = res.data;
    return data;
}

export const login = async (formData) => {
    const token = localStorage.getItem('isUserExist');
    const res = await axios.post(`${baseURL}/auth/login`, formData, {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    });
    return res;
}






