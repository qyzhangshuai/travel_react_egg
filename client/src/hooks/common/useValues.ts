/**
 * @description: 多参数的useState
 * @author: zs
 * @Date: 2020-08-25 16:09:31
 * @LastEditTime: 2021-03-13 20:42:45
 * @LastEditors: zs
 */
 import { useState, useCallback } from 'react';

 function useValues<T>(initialValue: T) {
   const [values, dispatch] = useState(initialValue)
 
   const setDispatch = useCallback((_values: Partial<T>) => {
     if (typeof _values !== 'object') {
       return console.warn('values required type is object!');
     }
     return dispatch((values: T) => ({ ...values, ..._values }))
   }, [dispatch])
 
   return [values, setDispatch] as [T, React.Dispatch<Partial<T>>]
 }
 
 export default useValues;