/**
 * @description: 多参数的useState
 * @author: zs
 * @Date: 2020-08-25 16:09:31
 * @LastEditTime: 2020-08-29 16:31:09
 * @LastEditors: zs
 */
import { useState, useCallback } from 'react';

function useValues <T>(initialValue) {
  const [values, dispatch] = useState(initialValue)

  const setDispatch = useCallback((_values: Partial<T>) => {
    if (typeof _values !== 'object') {
      return console.warn('values required type is object!');
    }
    return dispatch((values: T) => ({ ...values, ..._values }))
  }, [dispatch])

  return [values, setDispatch]
}

export default useValues ;