import Vue from 'vue'
import axios from 'axios'
import authService from '../services/authService'
axios.interceptors.request.use((config) => {
  // Do something before request is sent
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  if (token) {
    config.headers.common.Authorization = token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
axios.interceptors.response.use((res) => {
  // Do something before request is sent
  if (res.status === 401) {
    /* log out the user */
    authService.logOut()
  }
  const hasAuthProperty = Object.prototype.hasOwnProperty.call(res.data, 'token')
  if (hasAuthProperty) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', 'bearer ' + res.data.token)
    }
  }
  return res
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
Vue.use(axios)
