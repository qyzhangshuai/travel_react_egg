/**
 * @description 更新
 * @author zs
 * @Date 2020-05-26 10:34:17
 * @LastEditTime: 2021-02-25 14:33:07
 * @LastEditors: zs
 */
import { useEffect, useRef, DependencyList } from 'react';

const useUpdateEffect: typeof useEffect = (effect, deps: DependencyList = []) => {
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
        } else {
            return effect();
        }
    }, deps);
};

export default useUpdateEffect;