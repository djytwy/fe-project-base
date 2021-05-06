import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { Response } from './interface'

class RAxios {
  private options : AxiosRequestConfig;
  private httpInstance: AxiosInstance;

  constructor (options: AxiosRequestConfig) {
    this.options = options
    this.httpInstance = axios.create(this.options)
    this.setupInterceptors()
  }

  public get <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request<T>(config, 'GET')
  }

  public post <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request<T>(config, 'POST')
  }

  public delete <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request<T>(config, 'delete')
  }

  public put <T> (config: AxiosRequestConfig): Promise<T> {
    return this.request<T>(config, 'PUT')
  }

  private async request <T> (options: AxiosRequestConfig, methods: Method) : Promise<T> {
    let _res : AxiosResponse<Response<T>> = await this.httpInstance({
      ...options,
      method: methods,
    })
    if (_res.status === 200) {
      // http响应码200的情况，业务code返回2000即成功
      if (_res.data.code === 2000) {
        return(_res.data.datas)
      } else {
        throw new Error(`业务响应码：${_res.data.msg}`)
      }
    } else {
      throw new Error(`http状态码: ${_res.status}`)
    }
  }

  private setupInterceptors () {
    this.httpInstance.interceptors.request.use(config => {
      console.log('请求拦截')
      return config
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
    this.httpInstance.interceptors.response.use(config => {
      console.log('响应拦截')
      return config
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
  }
}

export default RAxios
