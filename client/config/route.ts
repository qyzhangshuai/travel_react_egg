/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 13:51:39
 * @LastEditTime: 2021-03-14 22:45:20
 * @LastEditors: zs
 */
export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        wrappers: [
          '@/pages/auth',
        ],
        component: '@/pages/home',
        title: '首页'
      },
      {
        path: '/house',
        component: '@/pages/house',
        title: '房屋详情'
      },
      {
        path: '/search',
        component: '@/pages/search',
        title: '搜索'
      },
      {
        path: '/order',
        component: '@/pages/order',
        title: '订单',
      },
      {
        path: '/user',
        component: '@/pages/user/layouts',
        routes: [
          {
            path: '/user',
            component: '@/pages/user',
            title: '我的',
          },
          {
            path: '/user/edit',
            component: '@/pages/user/edit',
            title: '设置用户',
          }
        ]
      },
      {
        path: '/traval/login',
        component: '@/pages/login',
        title: '登录'
      },
      {
        path: '/register',
        component: '@/pages/register',
        title: '注册'
      },
      {
        component: '@/pages/notFound',
        title: '404',
      },
    ]
  },
]