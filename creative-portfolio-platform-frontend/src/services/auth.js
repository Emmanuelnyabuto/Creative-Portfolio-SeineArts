import { fetchData } from './api';

const API_URL = 'https://api.example.com/auth'; // Replace with your API URL

export const loginUser = async (email, password) => {
  return await fetchData(`${API_URL}/login`, 'POST', { email, password });
};

export const signupUser = async (name, email, password) => {
  return await fetchData(`${API_URL}/signup`, 'POST', { name, email, password });
};

export const logoutUser = () => {
  localStorage.removeItem('user');
};
