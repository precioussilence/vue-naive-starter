import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

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
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data: res } = response
    if (res.code === 200) {
      return res.data
    }
    else {
      return Promise.reject(new BusinessError(res.message, res.data))
    }
  },
  (error) => {
    return Promise.reject(error)
  },
)

export class BusinessError extends Error {
  data?: any
  constructor(message: string, data?: any) {
    super(message)
    this.name = 'BusinessError'
    this.data = data
  }
}

export default service
