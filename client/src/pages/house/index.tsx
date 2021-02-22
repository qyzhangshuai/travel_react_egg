/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:10:31
 * @LastEditTime: 2021-02-22 23:27:30
 * @LastEditors: zs
 */
import React, { useEffect, useState } from 'react'
import { useLocation } from 'umi'
import { useHttpHook } from '@/hooks'
import Banner from './Banner'
import Info from './Info'
import Lists from './Lists'
import Footer from './Footer'
import styles from './index.less'

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const House: React.FC = () => {
  const [detail, setDetail] = useState({}) // 轮播图
  const [order, setOrder] = useState([]) // 房屋信息
  const [comments, setComments] = useState([]) // 评论列表
  // @ts-ignore
  const { query } = useLocation();
  // const {} = useHttpHook()


  useEffect(() => {
    if (query?.id) {

    } else {

    }
  }, [])

  const handleBtnClick = () => {

  }

  return (
    <div className={styles.house_page}>
      {/**banner */}
      <Banner banner={detail?.banner} />
      {/**房屋信息 */}
      <Info detail={detail?.info} order={order} btnClick={handleBtnClick} />
      {/**评论列表 */}
      <Lists lists={comments} showLoading={false} />
      {/**footer */}
      <Footer />
    </div>
  )
}

export default House
