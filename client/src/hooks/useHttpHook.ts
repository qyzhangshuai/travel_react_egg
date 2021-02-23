/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 23:09:28
 * @LastEditTime: 2021-02-23 11:53:07
 * @LastEditors: zs
 */
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { request } from '@/utils';
import { Options } from '@/utils/axios';

type HttpHookParams = Options & {
  merge?: boolean
}

type Result = [any, (data: any) => void, boolean]

// 默认生成的数据不会合并
export default function useHttpHook(url: string, options: HttpHookParams = {}, merge?: boolean): Result {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false)
  const optionsRef = useRef(options)

  // 这里我们去除了loading，设置result为null，因为每次都会产生一个独立的闭包，我们可以根据null来进行判断loading状态
  const query = useCallback((data: any = {}) => {
    setLoading(true)
    
    request(url, {
      ...optionsRef.current,
      data: { ...optionsRef.current?.data, ...data }
    }).then((response) => {
      const { success, data } = response
      if (success && data) {
        if (merge) { // 如果是合并，返回的数据一定确保是数组类型
          setResult([...(result ? result : []), ...data])
        } else {
          setResult(data)
        }
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [url])

  return [result, query, loading];
}
