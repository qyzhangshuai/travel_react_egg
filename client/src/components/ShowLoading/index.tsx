/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-25 14:09:32
 * @LastEditTime: 2021-03-01 10:45:26
 * @LastEditors: zs
 */
import { FC, memo } from "react"
import { ActivityIndicator } from 'antd-mobile'
import styles from './index.less'

interface ShowLoadingProps {
    showLoading?: boolean
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ShowLoading: React.FC<ShowLoadingProps> = ({
    showLoading = true,
}) => {

    return (
        <>
            {showLoading
                ? <ActivityIndicator className={styles.loading_status} />
                : <div className={styles.loading_info}>没有数据了~</div>
            }
        </>
    )
}

export default memo(ShowLoading)
