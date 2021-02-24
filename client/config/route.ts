/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 13:51:39
 * @LastEditTime: 2021-02-24 16:05:46
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
      {
        component: '@/pages/notFound'
      },
    ]
  },
]