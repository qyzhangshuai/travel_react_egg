/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 21:25:23
 * @LastEditTime: 2021-03-14 22:25:10
 * @LastEditors: zs
 */
import { useState, useEffect } from 'react'
import styles from '../index.less'
import { Button, Toast } from 'antd-mobile';
import { timer } from '@/utils';

interface ItemProps {
  id: number,
  type: 0 | 1,
  img: string
  name: string
  price: string
  createTime: string
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Item: React.FC<ItemProps> = ({
  id,
  type,
  img,
  name,
  price,
  createTime,
}) => {
  const [state, setState] = useState()
  const handlePay = async () => {
    // const result = await Http({
    //   url: '/orders/pay',
    //   body: {
    //     id: props.id
    //   }
    // });
    // if (result) {
    //   Toast.success('支付成功');
    //   window.location.reload();
    // }
  }

  useEffect(() => {

  }, [])

  const renderPay = () => {
    switch (type) {
      case 0:
        return <Button type='warning' size='small' onClick={handlePay}>去支付</Button>
      case 1:
        return <Button size='small'>已完成</Button>
      default:
        break;
    }
  };
  return (
    <div className={styles.order_item}>
      <img alt='order' src={img} />
      <div className={styles.center}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>￥{price}</div>
        <div className={styles.time}>{timer(createTime, 'day')}</div>
      </div>
      <div className={styles.pay}>
        {renderPay()}
      </div>
    </div>
  )
}

export default Item
