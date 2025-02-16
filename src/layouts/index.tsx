import * as React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

const Layout: React.FC<RouteConfigComponentProps> = React.memo(function Layout(props) {
  // const history = useHistory()
  const { route } = props
  console.log('hybird layout')
  return renderRoutes(route?.routes)
})

export const H5Layout: React.FC<RouteConfigComponentProps> = React.memo(function H5Layout(props) {
  const { route } = props
  // const history = useHistory()
  // TODO 判断是否是微信环境，跳转到错误提示页
  // history.push('/wx-page-error')
  console.log('h5 layout')
  return <>{renderRoutes(route?.routes)}</>
})

export default Layout
