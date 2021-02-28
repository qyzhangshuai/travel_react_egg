/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 13:51:39
 * @LastEditTime: 2021-02-25 14:07:15
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
        path: '/search',
        component: '@/pages/search'
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