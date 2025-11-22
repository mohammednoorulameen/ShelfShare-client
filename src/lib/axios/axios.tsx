import { ERROR_MESSAGES } from '@/app/constants/messages';
import axios from 'axios'


export const AxiosInstance = axios.create({
    baseURL: "http://localhost:5050/api",
     withCredentials: true,
})


/*-------------
Auto Refresh Token interseptor 
-------------------------------*/


AxiosInstance.interceptors.response.use(
    (response)=> response, async (error)=>{
        const ActualRequest = error.config;

        if(error.response?.status == 401 && !ActualRequest._retry){
            ActualRequest._retry = true;
            try {
                await AxiosInstance.post("/auth/refresh");
                return AxiosInstance(ActualRequest)
            } catch (refreshError) {
                console.log(ERROR_MESSAGES.REFRESH_TOKEN_FAILED, refreshError);
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
)



