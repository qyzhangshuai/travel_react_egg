/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-06 20:30:01
 * @LastEditTime: 2021-03-18 14:39:10
 * @LastEditors: zs
 */
import { FC } from 'react'
import { Toast } from 'antd-mobile'
import { MenuBar } from '@/components';
import { Redirect, useLocation } from 'umi';
interface BasicLayoutProps {

}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

Toast.config({ duration: 3, mask: false }); // 全局配置

const BasicLayout: FC<BasicLayoutProps> = (props) => {
  const location = useLocation();
  const paths = ['/home', '/order', '/user'];

  if (location.pathname === '/') {
    return <Redirect to='/home' />
  }

  return (
    <div style={{ height: '100%' }}>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {props.children}
    </div>
  );
}

export default BasicLayout;

