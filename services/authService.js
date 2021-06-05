import axios from 'axios'
const authService = {
  auth: () => {
    return axios.post(`${process.env.BASE_URL}/auth/me`)
  },
  authWithToken: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', 'bearer ' + token)
    }
    return axios.post('/auth/me')
  },
  login: (payload) => {
    return axios.post(`${process.env.BASE_URL}/auth/login`, payload)
  },
  register: (payload) => {
    return axios.post(`${process.env.BASE_URL}/register`, payload)
  },
  logOut: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', '')
    }
  }
}
export default authService
