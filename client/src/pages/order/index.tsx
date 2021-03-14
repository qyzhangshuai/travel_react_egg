/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 19:12:27
 * @LastEditTime: 2021-03-14 19:10:15
 * @LastEditors: zs
 */
import { useState, useEffect, useMemo } from 'react';
import { Tabs } from 'antd-mobile';
import { useSelector } from 'umi'
import { shallowEqual } from 'react-redux'
import { useHttpHook, useObserverHook } from '@/hooks';
import { CommonEnum } from '@/constants';
import { isEmpty } from 'project-libs';
import styles from './index.less'
import Lists from './Lists'
import { RootState } from '@/types/store';

interface OrderProps {

}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const namespace = 'order'

const Order: React.FC<OrderProps> = () => {

  const {
    unpayOrders,
    payOrders,
  } = useSelector(({ order }: RootState) => order, shallowEqual)
  const {
    unpayOrdersLoading,
    payOrdersLoading,
  } = useSelector(({ loading }: RootState) => {
    return {
      unpayOrdersLoading: loading.effects[`${namespace}/fetchUnpayOrder`],
      payOrdersLoading: loading.effects[`${namespace}/fetchPayOrder`]
    }
  }, shallowEqual)

  const handleChange = (e) => {

  }

  const tabs = useMemo(() => [
    { title: '未支付', sub: 0 },
    { title: '已支付', sub: 1 }
  ], [])

  return (
    <>
      <div className={styles.order_page}>
        <Tabs
          tabs={tabs}
          onChange={handleChange}
        >
          <div className='tab'>
            <Lists orders={unpayOrders} type={0} showLoading={unpayOrdersLoading} />
          </div>
          <div className='tab'>
            <Lists orders={payOrders} type={1} showLoading={payOrdersLoading} />
          </div>
        </Tabs>
      </div>
    </>
  )

}

export default Order
