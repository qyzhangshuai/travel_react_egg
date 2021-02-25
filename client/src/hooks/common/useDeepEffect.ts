/**
 * @description: 依赖项，深度比较
 * @author: zs
 * @Date: 2021-02-25 14:27:14
 * @LastEditTime: 2021-02-25 14:42:05
 * @LastEditors: zs
 */
import { useEffect, useRef, EffectCallback } from 'react'
import { isEqual } from 'lodash'

export default function useDeepEffect(effect: EffectCallback, deps: any[] = []) {
    const watchRef = useRef([])

    useEffect(() => {
        watchRef.current = deps
        return effect()
    }, [isEqual(deps, watchRef.current)])
}