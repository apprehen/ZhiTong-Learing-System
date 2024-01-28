import type { IRouter } from '@/types/router'
import { Route } from 'react-router-dom'
export const renderRoutes = (routes: IRouter[]) => {
  return routes.map((item) => (
    <Route key={item.path} path={item.path} element={item.element}>
      {item.children && renderRoutes(item.children)}
    </Route>
  ))
}
