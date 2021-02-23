import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import { cloneDeep } from 'lodash'
import { Toast } from 'antd-mobile'
import storage from './storage'
import { prefix } from '@/config';

type RequestPromise<T> = Promise<Partial<Omit<AxiosResponse<T>, 'data'>> & {
  success: boolean,
  message: string,
  statusCode: number,
  // const data = Array.isArray(response.data) ? response.data : (response.data.data || null)
  data: any // 因为返回的data我们做了处理
}>

type RequestResponse = {
  success: boolean
  message: string
  statusCode: number
  data: object | any[]
  [props: string]: any
}

export type Options = AxiosRequestConfig & { hasErrorTip?: boolean }

const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
}

const defaultOptions = {
  method: 'GET' as const,
  headers: defaultHeaders,
  hasErrorTip: true, // 默认是有错误提示
}

export default function request(url: string, options: Options = {}): RequestPromise<RequestResponse> {
  options = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    url,
  }

  handleMethod(options)

  // 设置 Authorization
  // const token = storage.getItem(`${prefix}-token`);
  // if (token) {
  //   options.headers = {
  //     'Authorization': `Bearer ${token}`,
  //     ...options.headers,
  //   }
  // }
  return axios(options)
    .then(response => {
      const { status, statusText } = response
      const successed = checkRspStatus(response)
      if (successed) {
        const data = Array.isArray(response.data) ? response.data : (response.data.data || null)
        return Promise.resolve({
          ...response,
          success: true,
          message: statusText,
          statusCode: status,
          data
        })
      }
      // 错误时
      const error = {
        message: 'http response status error',
        config: options,
        code: `${status}`,
        response,
        isAxiosError: false,
      }
      return Promise.reject(error)
    })
    .catch(error => {
      const { response, message, code } = error

      // 错误提示
      if (options.hasErrorTip) {
        tipError(response || {
          ...error,
          status: 600
        })
      }

      let msg = ''
      let statusCode: number

      if (response && response instanceof Object) {
        const { statusText } = response
        statusCode = code || response.status
        msg = message || response.data.message || statusText || '请求错误，请刷新重试';
      } else {
        statusCode = 600
        msg = message || 'Network Error'
      }

      return Promise.resolve({
        ...response,
        data: response && (response.data || response.data.data || {}),
        success: false,
        status: statusCode,
        message: msg,
      })
    })
}

// 检查请求的状态
export function checkRspStatus({ status, data = {} }: AxiosResponse) {
  if (
    (status >= 200 && status < 300)
    && (data.code === 0 || data.code === 200 || data.status >= 200 && data.status < 300) // code 码是服务端返回的
  ) {
    return true;
  }

  return false;
}

function tipError(response: AxiosResponse) {
  const { data = {}, status, statusText } = response;
  let errorMsg = data.message || statusText || '请求错误，请刷新重试';

  console.error('http返回结果的 status 码错误，错误信息是:', response);

  // if (status === 401 || data.code === 401 || data.state === 401) {
  //   storage.removeItem(`${prefix}-token`);
  //   message.error('token过期，正在返回登录页...', 3, () => {
  //     window.location.replace('/mini/login');
  //   });
  //   return;
  // }
  Toast.fail(errorMsg)
}

// 处理请求参数
const methodArr = ['PUT', 'POST', 'DELETE', 'PATCH']
function handleMethod(options: AxiosRequestConfig) {
  const method = options.method.toUpperCase() as Partial<Method>
  //get post 类型需要拼接url参数 isAddUrlParams=true 
  if ((method === 'GET' && options.data) || (method === 'POST' && options.data && options.data.isAddUrlParams)) {
    options.params = cloneDeep(options.data)
    delete options.data
    return
  }
  // 说明：如果post/put/delete请求携带参数通过 x-www-form-urlencoded的方式  isUrl=true
  if (methodArr.includes(method)) byXWWWFormUrlencoded(options, method)
}
// post、put等通过 x-www-form-urlencoded的方式,那么就需要在请求中加上一个isUrl=true做一个标识
function byXWWWFormUrlencoded(options: AxiosRequestConfig, method: Partial<Method>) {
  if (options.method.toUpperCase() === method.toUpperCase() && options.data && options.data.isUrl) {
    delete options.data.isUrl
    options.params = { ...options.data }
    delete options.data
  }
}