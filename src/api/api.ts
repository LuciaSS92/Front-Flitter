import axios, { AxiosHeaders } from 'axios'
import store from '@/store'

const flitterApi = axios.create({
  baseURL: 'http://localhost:3000'
})

flitterApi.interceptors.request.use((config) => {
  const token = store.state.token ?? ''
  if (token) {
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
  }
  return config
})

export default flitterApi
