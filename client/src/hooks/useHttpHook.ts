/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 23:09:28
 * @LastEditTime: 2021-03-01 11:13:11
 * @LastEditors: zs
 */
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { request } from '@/utils';
import { Options, RequestResponse } from '@/utils/axios';

type HttpHookParams = Options & {
  defaultQuery?: boolean // 首次加载，是不是会请求
}

type Result = [any, QueryFn, boolean]
interface QueryFn {
  (data?: any): Promise<Partial<RequestResponse>>
}
// 默认生成的数据不会合并
export default function useHttpHook(url: string, options: HttpHookParams = {}): Result {
  const { defaultQuery = false, ...restOptions } = options
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false)
  const optionsRef = useRef<HttpHookParams>()
  optionsRef.current = restOptions
  // 这里我们去除了loading，设置result为null，因为每次都会产生一个独立的闭包，我们可以根据null来进行判断loading状态
  const query: QueryFn = useCallback((data = {}) => {
    setLoading(true)

    // 如果data不是数组，也不是字符串，那么我们进行对象合并
    if (!Array.isArray(data) || typeof data !== 'string') {
      data = { ...optionsRef.current?.data, ...data }
    }

    return request(url, {
      ...optionsRef.current,
      data: data
    }).then((response) => {
      const { success, data } = response
      if (success && data) {
        setResult(data)
      }
      return response
    }).catch((err) => {
      console.error('err,', err)
      return { success: false }
    })
      .finally(() => {
        setLoading(false)
      })
  }, [url])

  useEffect(() => {
    if (defaultQuery) {
      query()
    }
  }, [defaultQuery, query])

  return [result, query, loading];
}
