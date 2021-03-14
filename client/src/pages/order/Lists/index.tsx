/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 18:34:41
 * @LastEditTime: 2021-03-14 21:32:20
 * @LastEditors: zs
 */
import { useState, useEffect } from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { isEmpty } from 'project-libs';
import OrderItem from './Item';
import { ShowLoading } from '@/components';
import OrderSkeletons from './OrderSkeletons';

interface ListsProps {
  orders: any[],
  type: 0 | 1,
  showLoading: boolean
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Lists: React.FC<ListsProps> = ({
  orders,
  type,
  showLoading
}) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (isEmpty(orders)) {
        setState(true)
      }
    }, 1500);
  }, [])
  return (
    <div>
      {
        isEmpty(orders)
          ? <>{state ? <ShowLoading showLoading={false} /> : <OrderSkeletons />}</>
          : <div>
            {
              orders.map(item => (
                <OrderItem type={type} key={item.id} {...item} />
              ))
            }
            <ShowLoading showLoading={showLoading} />
          </div>
      }
    </div>
  )
}

export default Lists
