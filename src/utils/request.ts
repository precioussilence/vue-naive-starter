import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const message = useMessage()
const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    message.error(error.message || 'An error occurred during the request')
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data: res } = response
    if (res.code === 200) {
      return response.data
    }
    else {
      message.error(res.message || 'An error occurred during the response')
      return Promise.reject(res)
    }
  },
  (error) => {
    message.error(error.response?.message || 'An error occurred during the response')
    return Promise.reject(error)
  },
)

export default service
