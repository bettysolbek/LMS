import axios from 'axios';
import { useAuthStore } from '~/store/AuthStore';

const api = axios.create({
  // baseURL: 'http://bekicoder05.pythonanywhere.com',
  baseURL: 'http://192.168.100.195:3000',
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore();
    const token = authStore.getAccessToken;
    if (token && config.url !== '/users/login') {
      config.headers["Authorization"] = 'JWT ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add any interceptors or custom configurations
api.interceptors.response.use(
  response => {
    if (response.data.detail !== "" && response.data.detail !== "ok" && response.data.detail) {
      showSuccessToast(response.data.detail);
    }
    return response;
  },
  error => {
    // if (error.response.status === 400) {
    //   const errors = error.response.data;
    //   Object.keys(errors).forEach(key => {
    //     const errorMessages = errors[key];
    //     errorMessages.forEach(errorMessage => {
    //       showErrorToast(`${key} ${errorMessage}`);
    //     });
    //   });
    // }
    return Promise.reject(error);
  }
);

// Function to show success toast
function showSuccessToast(message) {
  console.log("Success:", message);
}

// Function to show error toast
function showErrorToast(message) {
  console.error("Error:", message);

}

export default api;