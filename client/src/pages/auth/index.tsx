/**
 * @description: 权限校验
 * @author: zs
 * @Date: 2021-02-24 15:53:20
 * @LastEditTime: 2021-02-24 16:03:12
 * @LastEditors: zs
 */
import React from 'react'
import { Redirect } from 'umi'

interface AuthProps { }

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Auth: React.FC<AuthProps> = (props) => {

  const isLogin = true

  return (
    <>
      {  isLogin ? <div>{props.children}</div> : <Redirect to="/login" />}
    </>
  );
}

export default Auth
