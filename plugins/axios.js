import { Message } from 'element-ui'

export default function ({ $axios, redirect }) {
  $axios.defaults.baseURL = 'https://www.fastmock.site/mock/5ae8a35418a53e4a0a524d3c31810603/api';
  $axios.defaults.timeout = 20000;

  $axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )

  $axios.interceptors.response.use(
    response => {
      const res = response.data
      if (res.message !== '成功') {
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(new Error(res.message || 'Error'))
      } else {
        return res
      }
    },
    error => {
      console.log('err' + error) // for debug
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
  )
}