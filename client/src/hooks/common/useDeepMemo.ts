/**
 * @description: 依赖项，深度比较
 * @author: zs
 * @Date: 2021-02-25 14:26:42
 * @LastEditTime: 2021-02-25 14:41:57
 * @LastEditors: zs
 */
import { useRef, EffectCallback, useMemo } from 'react'
import { isEqual } from 'lodash'

export default function useDeepMemo(effect: EffectCallback, deps: any[] = []) {
    const watchRef = useRef([])

    return useMemo(() => {
        watchRef.current = deps
        return effect()
    }, [isEqual(deps, watchRef.current)])

}