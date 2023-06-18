import axios from 'axios'

const baseURL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://rentskins-backend.onrender.com/api'

export const Api = axios.create({ baseURL })
