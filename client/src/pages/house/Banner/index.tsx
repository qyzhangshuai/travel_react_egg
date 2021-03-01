/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:23:11
 * @LastEditTime: 2021-03-01 17:48:41
 * @LastEditors: zs
 */
import { useState, useEffect } from 'react';
import AwesomeSwiper from 'react-awesome-swiper';
import styles from '../index.less'

interface BannerProps {
  banner: any[]
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------


const Banner: React.FC<BannerProps> = ({
  banner = [],
}) => {

  const [config] = useState({
    loop: true,
    autoplay: {
      delay: 3000
    },
    lazy: true,
    pagination: {
      el: '.swiper-pagination'
    }
  })

  return (
    <AwesomeSwiper className={styles.banner} config={config}>
      <div className={'swiper-wrapper'}>
        {banner?.map((item, index) => <div className="swiper-slide" key={index}><img alt='banner' src={item} /></div>)}
      </div>
      <div className='swiper-pagination' />
    </AwesomeSwiper>
  )
}

export default Banner
