
import axios from 'axios';

// Base URL for API
const API_URL = 'mysql://root:rAUjZBLADTiksNvEEspQaMJgYuAcmzaz@mysql-sfn5.railway.internal:3306/railway';

// Interface for form data
export interface railwayFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Function to submit railway
export const submitrailway = async (formData: railwayFormData) => {
  try {
    const response = await axios.post(`${API_URL}/railway`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting railway:', error);
    throw error;
  }
};

// Function to get all railway messages (if needed)
export const getrailwayMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/railway`);
    return response.data;
  } catch (error) {
    console.error('Error fetching railway messages:', error);
    throw error;
  }
};
