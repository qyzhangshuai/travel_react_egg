/**
 * @description 更新
 * @author zs
 * @Date 2020-05-26 10:34:17
 * @LastEditTime 2020-05-26 10:34:40
 * @LastEditors zs
 */
import { useEffect, useRef } from 'react';

const useUpdateEffect: typeof useEffect = (effect, deps) => {
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