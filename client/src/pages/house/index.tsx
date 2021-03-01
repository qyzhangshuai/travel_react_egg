/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:10:31
 * @LastEditTime: 2021-03-01 15:47:20
 * @LastEditors: zs
 */
import React, { useEffect, useState } from 'react'
import { useLocation, useSelector } from 'umi'
import { useHttpHook } from '@/hooks'
import { house } from '@/config/apis'
import { shallowEqual } from 'react-redux'
import Banner from './Banner'
import Info from './Info'
import Lists from './Lists'
import Footer from './Footer'
import styles from './index.less'

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const namespace = 'house'

const House: React.FC = () => {
  const { banner, info, comments } = useSelector((state) => state[namespace], shallowEqual)

  const handleBtnClick = () => {

  }

  return (
    <div className={styles.house_page}>
      {/**banner */}
      <Banner banner={banner} />
      {/**房屋信息 */}
      <Info detail={info} btnClick={handleBtnClick} />
      {/**评论列表 */}
      <Lists lists={comments} showLoading={false} />
      {/**footer */}
      <Footer />
    </div>
  )
}

export default House
