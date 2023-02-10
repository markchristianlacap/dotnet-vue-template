import axios from 'axios'
const API_URL = import.meta.env.VITE_API_URL || '/api'
const axiosInstance = () => {
  const http = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  })
  return http
}
export const http = axiosInstance()
