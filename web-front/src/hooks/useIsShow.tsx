import { useLocation } from 'react-router-dom'
import routerData from '@/router'
export const useIsShowMenu = (): boolean => {
  const location = useLocation()
  const path = location.pathname.split('/')[1]
  // 由于有动态路由，所以直接取一级路由判断是否显示菜单
  return (
    routerData.find((item) => item.path.split('/')[1] === path)?.hasMenu ||
    false
  )
}
