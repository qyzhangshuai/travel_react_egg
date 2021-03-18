/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 19:13:02
 * @LastEditTime: 2021-03-18 11:06:19
 * @LastEditors: zs
 */
import React, { useState, useEffect } from 'react';
import { List, Button } from 'antd-mobile';
import { history, useSelector } from 'umi';
import { shallowEqual } from 'react-redux'
import styles from './index.less'
import { RootState } from '@/types/store';

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const User: React.FC = () => {

  const {
    id,
    username,
    avatar,
    phone,
    sign,
  } = useSelector(({ app }: RootState) => app.userInfo, shallowEqual)

  const handleClick = () => {
    history.push({
      pathname: '/user/edit',
      query: {
        id: '10',
      },
    })
  }

  const handleLogout = () => {

  }

  return (
    <div className={styles.user_page}>
      {/**用户信息 */}
      <div className={styles.info}>
        <div className={styles.set} onClick={handleClick}>设置</div>
        <div className={styles.user}>
          <img alt='user' src={avatar || require('@/assets/yay.jpg')} />
          <div className={styles.tel}>{phone}</div>
          <div className={styles.sign}>{sign}</div>
        </div>
      </div>
      {/**列表 */}
      <div className={styles.lists}>
        <List>
          <List.Item arrow='horizontal'>
            用户协议
          </List.Item>
          <List.Item arrow='horizontal'>
            常见问题
          </List.Item>
          <List.Item arrow='horizontal'>
            联系客服
          </List.Item>
        </List>
      </div>
      <Button style={{ marginTop: '100px' }} onClick={handleLogout}>退出登录</Button>
    </div>
  )
}

export default User