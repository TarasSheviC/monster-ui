import axios from "axios";

const API_URL = "http://localhost:8000";

export const fetchAccounts = async () => {
  const response = await axios.get(`${API_URL}/accounts/`);
  return response.data;
};

export const fetchAnalytics = async () => {
  const response = await axios.get(`${API_URL}/analytics/`);
  return response.data;
};

export const addAccount = async (phone, personality) => {
  const response = await axios.post(`${API_URL}/accounts/add`, { phone, personality });
  return response.data;
};
