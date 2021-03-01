/**
 * @description: 搜索骨架屏
 * @author: zs
 * @Date: 2021-02-26 17:29:15
 * @LastEditTime: 2021-03-01 10:46:01
 * @LastEditors: zs
 */
import { useState } from "react"
import styles from './index.less'
import classnames from 'classnames'

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const imgClassName = 'search-item-img'

const Skeletons: React.FC<{}> = ({
}) => {
  const [state] = useState(Array(7).fill(1));

  return (

    <>
      {
        state.map((item, index) => (
          <div className={styles.item} key={index}>
            <img alt='img' className={'skeletons'} src={require('@/assets/blank.png')}/>
            <div className={styles.item_right}>
              <div className={classnames(styles.title, 'skeletons')}></div>
              <div className={classnames(styles.price, 'skeletons')}></div>
            </div>
          </div>
        ))
      }
    </>

  )
}

export default Skeletons
