
import axios from 'axios';

// Base URL for API
const API_URL = 'http://localhost:5000/api';

// Interface for form data
export interface FeedbackFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Function to submit feedback
export const submitFeedback = async (formData: FeedbackFormData) => {
  try {
    const response = await axios.post(`${API_URL}/feedback`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};

// Function to get all feedback messages (if needed)
export const getFeedbackMessages = async () => {
  try {
    const response = await axios.get(`${API_URL}/feedback`);
    return response.data;
  } catch (error) {
    console.error('Error fetching feedback messages:', error);
    throw error;
  }
};
