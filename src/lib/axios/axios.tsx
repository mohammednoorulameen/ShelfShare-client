import { ERROR_MESSAGES } from '@/app/constants/messages';
import axios from 'axios'


export const AxiosInstance = axios.create({
    baseURL: "http://localhost:5050/api",
     withCredentials: true,
})


/*-------------
Auto Refresh Token interseptor 
-------------------------------*/


// AxiosInstance.interceptors.response.use(
//     (response)=> response, async (error)=>{
//         const ActualRequest = error.config;

//         if(error.response?.status == 401 && !ActualRequest._retry){
//             ActualRequest._retry = true;
//             try {
//                 await AxiosInstance.post("/auth/refresh");
//                 return AxiosInstance(ActualRequest)
//             } catch (refreshError) {
//                 console.log(ERROR_MESSAGES.REFRESH_TOKEN_FAILED, refreshError);
//                 return Promise.reject(refreshError)
//             }
//         }
//         return Promise.reject(error)
//     }
// )



AxiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      originalRequest.url.includes("/auth/refresh") ||
      originalRequest.url.includes("/auth/logout")
    ) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

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
