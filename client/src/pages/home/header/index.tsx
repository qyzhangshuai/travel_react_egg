/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:35:25
 * @LastEditTime: 2021-02-09 13:59:41
 * @LastEditors: zs
 */
import React, { useState, useEffect, memo } from 'react';
import { Link, useDispatch, useSelector } from 'umi';
import styles from './index.less'

function Header() {
  const [username, setState] = useState(localStorage.getItem('username'))
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(cookie.get('user'))
  }, [])

  const handleClick = () => {
    setState('xx')
    dispatch({ type: 'app/updateState', payload: { userInfo: { name: 'hxy1' } } })
  }
  return (
    <div className={styles.header}>
      <div className={styles.header_title} onClick={handleClick}>民宿</div>
      <div className={styles.header_login}>
        {username ? username : <><Link to='/login'>登录</Link> | <Link to='/register'>注册</Link></>}
      </div>
    </div>
  )
}

export default memo(Header);