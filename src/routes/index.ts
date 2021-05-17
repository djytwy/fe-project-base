import loadable from '@loadable/component'
import Layout, { H5Layout } from '@/layouts'
import { RouteConfig } from 'react-router-config'

const routesConfig: RouteConfig[] = [
  {
    path: '/',
    exact: true,
    component: loadable(() => import('@/pages/home')),
  },
  // APP 路由
  {
    path: '/hybird',
    exact: true,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/hybird')),
      },
    ],
  },
  // H5 相关路由
  {
    path: '/h5',
    exact: false,
    component: H5Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/h5')),
      },
    ],
  },
  // web页面的路由
  {
    path: '/web',
    exact: false,
    component: Layout,
    routes: [
      {
        path: '/',
        exact: false,
        component: loadable(() => import('@/pages/web')),
      },
    ],
  },
]

export default routesConfig
