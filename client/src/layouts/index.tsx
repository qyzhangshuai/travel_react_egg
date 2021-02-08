/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-06 20:30:01
 * @LastEditTime: 2021-02-08 09:43:16
 * @LastEditors: zs
 */
import { FC } from 'react'
import { MenuBar } from '@/components';
import { useLocation } from 'umi';
interface BasicLayoutProps {

}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const BasicLayout: FC<BasicLayoutProps> = (props) => {
  const location = useLocation();
  const paths = ['/', '/order', '/user'];
  return (
    <div>
      <MenuBar
        show={paths.includes(location.pathname)}
        pathname={location.pathname}
      />
      {props.children}
    </div>
  );
}

export default BasicLayout;

