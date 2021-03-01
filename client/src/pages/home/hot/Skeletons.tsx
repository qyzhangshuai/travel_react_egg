/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-01 11:28:56
 * @LastEditTime: 2021-03-01 13:45:12
 * @LastEditors: zs
 */
import { useState } from 'react'
import classnames from 'classnames'
import styles from './index.less'

interface SkeletonsProps {
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Skeletons: React.FC<SkeletonsProps> = ({
}) => {
  const [state] = useState(Array(6).fill(1));
  return (
    <>
      <div className={styles.hot_lists}>
        {state?.map((item, index) => (
          <div className={styles.hot_lists_item} key={index}>
            <img className={styles.img} alt='img' src={require('@/assets/blank.png')} />
            <div className={classnames(styles.title, 'skeletons')} />
            <div className={classnames(styles.info, 'skeletons')} />
            <div className={classnames(styles.price, 'skeletons')} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Skeletons
