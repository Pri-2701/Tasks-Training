import api from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", 
  timeout: 5000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.status);
    return Promise.reject(error);
  }
);

export default api;
