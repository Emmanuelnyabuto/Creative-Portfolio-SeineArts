import { fetchData } from './api';

const PAYMENT_API_URL = 'https://api.example.com/payments'; // Replace with your API URL

export const processPayment = async (paymentDetails) => {
  return await fetchData(`${PAYMENT_API_URL}/process`, 'POST', paymentDetails);
};
