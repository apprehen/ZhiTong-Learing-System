import React from 'react'
import type { IRouter } from '@/types/router'
import Login from '@/pages/Login'
import AdminMange from '@/pages/AdminManage'
import { Navigate } from 'react-router-dom'
// 路由懒加载
const withLoadingComponent = (comp: JSX.Element) => {
  return (
    <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
  )
}
// type RouterDataType = typeof routerData
// type RouterKeys = keyof RouterDataType
const routerData: IRouter[] = [
  {
    path: '/',
    element: <Navigate to={'/login'}></Navigate>,
    hasMenu: true
  },
  {
    path: '/login',
    element: <Login></Login>,
    hasMenu: true
  },
  {
    path: '/admin_manage',
    element: withLoadingComponent(<AdminMange></AdminMange>),
    hasMenu: false
  }
]

export default routerData
