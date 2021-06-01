import axios from 'axios'
const authService = {
  auth: () => {
    return axios.post('/auth/me')
  },
  authWithToken: (token) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', 'bearer ' + token)
    }
    return axios.post('/auth/me')
  },
  login: (payload) => {
    return axios.post('/login/auth', payload)
  },
  logOut: () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', '')
    }
  }
}
export default authService
