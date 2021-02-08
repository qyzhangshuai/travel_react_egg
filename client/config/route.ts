/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 13:51:39
 * @LastEditTime: 2021-02-08 19:11:42
 * @LastEditors: zs
 */
export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/home'
      },
      {
        path: '/order',
        component: '@/pages/order'
      },
      {
        path: '/user',
        component: '@/pages/user'
      },
    ]
  },
]