/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:23:11
 * @LastEditTime: 2021-02-22 23:07:24
 * @LastEditors: zs
 */
import React, { useEffect } from 'react'
import { Carousel } from 'antd-mobile';
import styles from '../index.less'

interface BannerProps {
  banner: any[]
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------


const Banner: React.FC<BannerProps> = ({
  banner = [],
}) => {

  useEffect(() => {

  }, [])

  return (
    <Carousel
      autoplay={false}
      infinite
      className={styles.banner}
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      <div className={styles.swiper_wrapper}>
        {banner?.map(item => (
          <div className={styles.swiper_slide} key={item.id}>
            <img alt='banner' src={item.url} />
          </div>
        ))}
      </div>
    </Carousel>
  )
}

export default Banner
