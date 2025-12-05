import { ERROR_MESSAGES } from '@/app/constants/messages';
import { config } from '@/config';
import axios from 'axios'


export const AxiosInstance = axios.create({
    baseURL: config.baseUrl,
     withCredentials: true,
})


/*-------------
Auto Refresh Token interseptor 
-------------------------------*/


AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    

    if (
      originalRequest.url.includes("/auth/login") ||
      originalRequest.url.includes("/auth/google-login") ||
      originalRequest.url.includes("/auth/register")
    ) {
      return Promise.reject(error);
    }

    if (
      originalRequest.url.includes("/auth/refresh") ||
      originalRequest.url.includes("/auth/logout")
    ) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('check iside axions',error.response)

      try {
        await AxiosInstance.post("/auth/refresh");
        return AxiosInstance(originalRequest);
      } catch (refreshError) {
        console.error(ERROR_MESSAGES.REFRESH_TOKEN_FAILED, refreshError);

        window.localStorage.clear();
        window.location.href = "/auth/user/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);







