/**
 * @description: 绑定dispatch
 * @author: zs
 * @Date: 2021-03-02 11:21:53
 * @LastEditTime: 2021-03-02 15:00:52
 * @LastEditors: zs
 */

import { useDispatch, Dispatch } from "umi";

type Fns = ((payload?: any) => { type: string, payload?: any }) | Function
interface FnObj {
  [props: string]: Fns
}

type BindCreator<T> = {
  [key in keyof T]: Function
} & {
  dispatch: Dispatch
}

export default function useBindCreator<T = FnObj>(fnObj = {} as T) {
  const dispatch = useDispatch()

  const bindCreator: BindCreator<T> = Object.entries(fnObj).reduce((prev, next) => {
    const [k, v] = next
    if (!prev[k]) {
      prev[k] = (...args: any[]) => {
        const result = v(...args)
        if (typeof result === 'object') {
          return dispatch(result)
        }
        // 如果不是返回对象，那么默认返回的就是函数即： dispatch({type:'x',payload})
        return result
      }
    }
    return prev
  }, { dispatch } as BindCreator<T>)

  return bindCreator
}