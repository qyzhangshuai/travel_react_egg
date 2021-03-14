/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 21:21:03
 * @LastEditTime: 2021-03-14 21:24:36
 * @LastEditors: zs
 */
import { useState, useEffect } from 'react';

import '../index.less';

export default function () {
  const [state] = useState(Array(3).fill(1));

  return (
    <div className='order_page'>
      {state.map((item, index) => (
        <div className='order_item' key={index}>
          <div className={'skeletons left'}></div>
          <div className='center'>
            <div className={'skeletons title'}></div>
            <div className={'skeletons price'}></div>
            <div className={'skeletons time'}></div>
          </div>
          <div className={'skeletons pay'}>
          </div>
        </div>
      ))}
    </div>
  )
}