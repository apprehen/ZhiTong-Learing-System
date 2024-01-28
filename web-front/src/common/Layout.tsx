import { Outlet } from 'react-router-dom'
import { useIsShowMenu } from '@/hooks/useIsShow'
const Layout = () => {
  const isShowMenu = useIsShowMenu()
  return (
    <div className="layout">
      <div className="header_wrap">111</div>
      {isShowMenu && <div className="menu_wrap">222</div>}
      <div className="nav_wrap"></div>
      <div className="outlet_wrap">
        <Outlet></Outlet>
      </div>
    </div>
  )
}
export default Layout
