/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-25 16:01:22
 * @LastEditTime: 2021-02-25 16:14:41
 * @LastEditors: zs
 */
import { ActivityIndicator } from 'antd-mobile'
import { memo } from 'react'

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Loading: React.FC<{}> = () => {
  return <ActivityIndicator toast />
}

export default memo(Loading)
