import axiosInstance from '~/networkServices/api/backendApi';

export const setupInterceptor = () => {
  // REQUEST
  axiosInstance.interceptors.request.use(
    (config) => {
      // Your request interceptor logic here
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // RESPONSE
  axiosInstance.interceptors.response.use(
    (res) => {
      // Your response interceptor logic here
      return res;
    },
    (err) => {
      // Your error handling logic here
      return Promise.reject(err);
    }
  );
};

// Use the setupInterceptor function immediately when this file is imported
setupInterceptor();