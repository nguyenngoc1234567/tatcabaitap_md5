import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchTodos = async () => {
  const response = await axios.get(`${API_BASE_URL}/todos`);
  return response.data;
};

export const addTodo = async (task) => {
  const response = await axios.post(`${API_BASE_URL}/todos`, {
    title: task,
    completed: false,
  });
  return response;
};
