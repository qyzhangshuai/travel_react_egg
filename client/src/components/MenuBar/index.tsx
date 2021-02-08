/**
 * @description: 菜单栏
 * @author: zs
 * @Date: 2021-02-07 09:36:53
 * @LastEditTime: 2021-02-08 10:39:43
 * @LastEditors: zs
 */
import React from 'react'
import {
  BsHouseDoorFill,
  BsHouseDoor,
  BsBagFill,
  BsBag,
  BsPersonFill,
  BsPerson,
} from 'react-icons/bs';
import { TabBar } from 'antd-mobile';
import { history } from 'umi';
import './index.less'

interface MenuBarProps {
  show: boolean
  pathname: string
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const MenuBar: React.FC<MenuBarProps> = ({
  show = false,
  pathname = ''
}) => {

  const items = [
    {
      title: '首页',
      selectedIcon: <BsHouseDoorFill style={{ fontSize: '0.24rem' }} />,
      icon: <BsHouseDoor style={{ fontSize: '0.24rem' }} />,
      link: '/'
    },
    {
      title: '订单',
      selectedIcon: <BsBagFill style={{ fontSize: '0.24rem' }} />,
      icon: <BsBag style={{ fontSize: '0.24rem' }} />,
      link: '/order'
    },
    {
      title: '我的',
      selectedIcon: <BsPersonFill style={{ fontSize: '0.24rem' }} />,
      icon: <BsPerson style={{ fontSize: '0.24rem' }} />,
      link: '/user'
    },
  ]


  return (
    <div className='menu-bar'>
      <TabBar hidden={!show}>
        {items.map(item => (
          <TabBar.Item
            key={item.link}
            title={item.title}
            icon={item.icon}
            selectedIcon={item.selectedIcon}
            selected={pathname === item.link}
            onPress={() => history.push(item.link)}
          />
        ))}
      </TabBar>
    </div>
  )
}

export default MenuBar
