import axios from 'axios'
import JSONbig from 'json-bigint'
import store from '@/store'

// 创建一个axios的实例，设置不同的baseURL
const instance = axios.create({
  timeout: 5000,
  baseURL: 'http://ttapi.research.itcast.cn'
})

instance.defaults.transformResponse = [function (data) {
  try {
    // data数据可能不是标准的JSON格式字符串，否则会导致JSONbig.parse(data)转换失败报错
    return JSONbig.parse(data)
  } catch (err) {
    // 无法转换的数据直接原样返回
    return data
  }
}]

instance.interceptors.request.use(function (config) {
  // 判断是否有登录状态
  // store是一个js模块，不是组件，要导入
  if (store.state.user) {
    // 如果有登录状态请求的时候，自动携带token
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  return response.data.data || response.data
}, function (error) {
  return Promise.reject(error)
})

export default instance
