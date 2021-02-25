/**
 * @description 仅执行一次
 * @author zs
 * @Date 2021-01-20 15:34:26
 * @LastEditTime: 2021-02-25 14:32:51
 * @LastEditors: zs
 */
import { useRef, useEffect, DependencyList } from 'react'

// callback 回传一个参数，执行callback后，关闭调
interface Callback {
    (close: any): void | VoidFunction
}
export default function useExeOnlyOne(callback: Callback, deps: DependencyList = []) {
    const isFirstRef = useRef(true)
    useEffect(() => {
        if (!isFirstRef.current) return
        return callback(isFirstRef)
    }, deps)
}

// 例如
// useExeOnlyOne((close) => {
//     dispatch({ type: 'xx' })
//         .then(() => {
//             close.current = false
//         })
// }, [])