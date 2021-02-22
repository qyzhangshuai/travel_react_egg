/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 23:09:28
 * @LastEditTime: 2021-02-22 23:27:05
 * @LastEditors: zs
 */
import { useState, useEffect, useCallback } from 'react';
import { request } from '@/utils';
import { Options } from '@/utils/axios';

interface HttpHookParams {
  url: string
  options: Options
  watch: any[]
}
export default function useHttpHook({
  url,
  options,
}: HttpHookParams) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  const query = useCallback((data: Pick<Options, 'data'> = {}) => {
    setLoading(true)
    request(url, { ...options, data: { ...options.data, ...data } }).then(({ success, data }) => {
      if (success && data) {
        setResult(data)
      }
    }).finally(() => {
      setLoading(false)
    })
  }, [url, options])

  return [result, query, loading];
}