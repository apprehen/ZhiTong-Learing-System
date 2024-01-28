import './App.css'
import { Route, Routes } from 'react-router-dom'
// import Login from '@/pages/Login'
import Layout from '@/common/Layout'
import routerData from './router'
import { renderRoutes } from '@/utils'
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>{renderRoutes(routerData)}</Route>
    </Routes>
  )
}

export default App
