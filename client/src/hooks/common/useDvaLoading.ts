/**
 * @description: 
 * @author: zs
 * @Date: 2020-11-26 15:15:25
 * @LastEditTime: 2021-02-08 19:01:17
 * @LastEditors: zs
 */
import { useCallback, useMemo } from 'react'
import { Loading } from 'umi'

export default function useDvaLoading(loading: Loading, queryEffectArr: string[]) {
    const handleLoading = useCallback((loadingArr: string[]) => {
        return loadingArr.some(item => loading.effects[item])
    }, [loading])

    const loadingStatus = useMemo(() => {
        return handleLoading(queryEffectArr)
    }, [handleLoading, queryEffectArr])

    return loadingStatus
}

// 举例：只要有一个是在加载的，loading就是true
// const loadingStatus = useDvaLoading(loading, [
//     'app/uploadWx',
//     'app/delWxMedia',
// ])