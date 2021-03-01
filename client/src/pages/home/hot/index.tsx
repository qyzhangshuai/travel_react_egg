/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:34:55
 * @LastEditTime: 2021-03-01 13:46:10
 * @LastEditors: zs
 */
import { RootState } from '@/types/store'
import React from 'react'
import { history, useSelector } from 'umi'
import { shallowEqual } from 'react-redux'
import Skeletons from './Skeletons'
import styles from './index.less'

interface HotProps {
  houses: any[]
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const namespace = 'home'

const Hot: React.FC<HotProps> = ({
  houses
}) => {
  const loading = useSelector((state: RootState) => state.loading.effects[`${namespace}/getHotHouse`], shallowEqual)
  const handleClick = (id: string) => {
    history.push({
      pathname: '/house',
      query: { id }
    });
  }

  return (
    <div className={styles.hot}>
      <h1>最热民宿</h1>
      {
        (loading && Array.isArray(houses) && !houses.length) ? <Skeletons /> : (
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
        )
      }
    </div>
  )
}

export default Hot
