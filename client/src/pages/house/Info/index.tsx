/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:23:11
 * @LastEditTime: 2021-03-02 10:34:23
 * @LastEditors: zs
 */
import { Button } from 'antd-mobile';
import { timer } from '@/utils';
import styles from '../index.less'

interface InfoProps {
  detail: any
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Info: React.FC<InfoProps> = ({ detail }) => {

  return (
    <div className={styles.info}>
      <div className={styles.info_title}>{detail?.title}</div>
      <div className={styles.info_msg}>简介：{detail?.msg}</div>
      <div className='info-price'>价格：￥{detail?.price}</div>
      <div className='info-time'>发布时间：{timer(detail?.publishTime)}</div>
      <div className='info-time'>开始出租：{timer(detail?.startTime, '')}</div>
      <div className='info-time'>结束出租：{timer(detail?.endTime, '')}</div>
      <Button className='info-btn' type='warning'>预定</Button>
    </div>
  )
}

export default Info
