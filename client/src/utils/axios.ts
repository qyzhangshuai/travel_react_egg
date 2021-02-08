/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-07 10:35:45
 * @LastEditTime: 2021-02-08 12:14:29
 * @LastEditors: zs
 */
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { Toast } from 'antd-mobile';

// eslint-disable-next-line import/no-mutable-exports

// axios基本配置
const baseConfig = {
  // withCredentials: true, // 允许跨域
  timeout: 10000, // 超时设置
  retry: 1, // 超时重新发请求的次数
  retryDelay: 2000, // 超时后再次发请求的间隔时间
  retryCount: 0,
};

/**
 * axios超时判断
 */
const isTimeoutError = (err: AxiosError) => err.code === 'ECONNABORTED' && err.message.includes('timeout');

/**
 * axios非超时,错误处理
 */

const commonErrorHandler = (err: AxiosError, url?: string) => {
  if (axios.isCancel(err)) {
    Toast.fail('请求已经取消');
  } else {
    Toast.fail(err!.message || '请求出错');
  }

  return { data: '' };
};

/**
 * 统一错误处理
 * @param  {AxiosError} err
 * @description: 和后端统一返回数据类型：{ data: {}, error: ''},请求不符合条件，返回状态码后端要进行相应的设置，并设置error对应的信息
 */
const errorHandler = (err: AxiosError, url?: any): any => {
  // eslint-disable-next-line no-use-before-define
  return isTimeoutError(err) ? timeoutHandle(err, url) : commonErrorHandler(err, url);
};

/**
 * axios超时,错误处理
 */
const timeoutHandle = async (err: AxiosError, url: any) => {
  const { config }: any = err;

  config.retryCount = config.retryCount || 0;
  if (config.retryCount > baseConfig.retry) {
    commonErrorHandler(err, url);
    config.retryCount = 0;
    return Promise.resolve({ data: '' });
  }
  config.retryCount += 1;
  return axios(config).catch(errorHandler(err, url));
};

/**
 * 请求做统一错误拦截，提醒
 * @param  {object} option ： 请求参数
 */
const cancelQueue: Array<Function> = [];

const cancel = (text?: any) => {
  if (!cancelQueue.length) return;
  for (let i = 0; i < cancelQueue.length; i++) {
    cancelQueue[i](text);
  }
};
const request = async ({ isAvoidShowError, ...option }: AxiosRequestConfig & { isAvoidShowError?: boolean }): Promise<any> => {
  const cancelToken = new axios.CancelToken((c: Function) => {
    cancelQueue.push(c);
  });
  const { data = {} } = await axios({ ...baseConfig, ...option, cancelToken }).catch(err => errorHandler(err, option!.url));
  if (!data) return;
  const { errno, errorMessage } = data;
  if (isAvoidShowError) return data;
  if (+errno !== 0) {
    Toast.fail("请求出错")
  }
  return data;
};

/**
 * get请求
 * @param  {string} url: 请求路径
 * @param  {object} params ： 请求参数~
 * @param  {object} options : 自定义配置
 */
const axiosGet = async <T = any>(url: string, params?: object, options?: AxiosRequestConfig, isAvoidShowError?: boolean): Promise<T> =>
  request({
    url,
    isAvoidShowError,
    params,
    ...options,
  });

/**
 * post请求1
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 * @description: post数据为application/json，一般用于新增,建议都用JSON传数据，可以比较方便的表示更为复杂的结构（有嵌套对象）
 */
const axiosPost = async <T = any>(url: string, data: object, options?: AxiosRequestConfig, isAvoidShowError?: boolean): Promise<T> =>
  request({
    url,
    isAvoidShowError,
    data,
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // trace_id: 'peakTask123450678',
    },
    ...options,
  });

/**
 * put请求
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 * @description:用于更数据，需要提交整个对象，（区别于patch只提交修改的信息，个人觉得put完全ok)
 */
const axiosPut = async (url: string, data: object, options?: AxiosRequestConfig): Promise<any> =>
  request({
    url,
    data,
    method: 'put',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  });
/**
 * delete请求
 * @param  {string} url: 请求路径
 * @param  {object} data ： 请求参数
 * @param  {object} options : 自定义配置
 * @description:用于删除数据
 */
const axiosDelete = async (url: string, data: object, options?: AxiosRequestConfig): Promise<any> =>
  request({
    url,
    data,
    method: 'delete',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    ...options,
  });

export {
  axiosGet,
  axiosPost,
  axiosPut,
  axiosDelete,
  errorHandler,
  cancel,
};
