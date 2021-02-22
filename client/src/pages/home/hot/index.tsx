/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:34:55
 * @LastEditTime: 2021-02-22 22:07:23
 * @LastEditors: zs
 */
import React from 'react'
import { history } from 'umi'
import styles from './index.less'

interface HotProps {
  houses: any[]
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Hot: React.FC<HotProps> = ({
  houses
}) => {

  const handleClick = (id: string) => {
    history.push({
      pathname: '/house',
      query: { id }
    });
  }

  return (
    <div className={styles.hot}>
      <h1>最热民宿</h1>
      <div className={styles.hot_lists}>
        {houses?.map(item => (
          <div className={styles.hot_lists_item} key={item.id} onClick={() => handleClick(item.id)}>
            <img className={styles.img} alt='img' src={item.img} />
            <div className={styles.title}>{item.title}</div>
            <div className={styles.info}>{item.info}</div>
            <div className={styles.price}>￥{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hot
