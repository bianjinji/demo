
import axios from 'axios'

const API_URL = 'http://your-backend.com/api'

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    })
    return response.data
  } catch (error:any) {
    throw error.response ? error.response.data : new Error('网络错误')
  }
}