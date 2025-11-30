import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Problems API
export const problemsAPI = {
  // Get all problems
  getAll: async (params = {}) => {
    const response = await api.get('/problems', { params });
    return response.data;
  },

  // Get single problem
  getById: async (id) => {
    const response = await api.get(`/problems/${id}`);
    return response.data;
  },

  // Create problem (admin)
  create: async (problemData) => {
    const response = await api.post('/problems', problemData);
    return response.data;
  },

  // Update problem (admin)
  update: async (id, problemData) => {
    const response = await api.put(`/problems/${id}`, problemData);
    return response.data;
  },

  // Delete problem (admin)
  delete: async (id) => {
    const response = await api.delete(`/problems/${id}`);
    return response.data;
  }
};

// Submissions API (we'll add this later)
export const submissionsAPI = {
  submit: async (submissionData) => {
    const response = await api.post('/submissions', submissionData);
    return response.data;
  },

  getUserSubmissions: async (userId) => {
    const response = await api.get(`/submissions/user/${userId}`);
    return response.data;
  }
};

// Users API (we'll add this later)
export const usersAPI = {
  register: async (userData) => {
    const response = await api.post('/users/register', userData);
    return response.data;
  },

  login: async (credentials) => {
    const response = await api.post('/users/login', credentials);
    return response.data;
  },

  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  }
};

export default api;