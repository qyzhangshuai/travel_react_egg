/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-25 14:09:32
 * @LastEditTime: 2021-02-25 14:16:20
 * @LastEditors: zs
 */
import { memo } from "react"
import styles from './index.less'

interface ShowLoadingProps {
    showLoading?: boolean
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const ShowLoading: React.FC<ShowLoadingProps> = ({ showLoading = true }) => {

    return (
        <div>
            {showLoading
                ? <div className={styles.loading_info}>loading</div>
                : <div className={styles.loading_info}>没有数据了~</div>}
        </div>
    )
}

export default memo(ShowLoading)
