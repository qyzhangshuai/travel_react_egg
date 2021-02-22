/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 13:51:39
 * @LastEditTime: 2021-02-22 22:10:06
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
        path: '/house',
        component: '@/pages/house'
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