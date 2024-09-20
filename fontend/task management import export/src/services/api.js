import axios from 'axios';

const API_URL = 'https://example.com/api';

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const importTasks = async (tasks) => {
  const response = await axios.post(`${API_URL}/tasks/import`, tasks);
  return response.data;
};
