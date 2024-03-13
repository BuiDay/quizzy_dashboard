import { Route, Routes } from 'react-router-dom'
import './App.css'
import { path } from './utils/path'
import Layout from './pages/Layout'
import DashboradPage from './pages/DashboradPage'

function App() {
  return (
    <div className='App'>
    <Routes>
       <Route path={path.SYSTEM} element={<Layout />} >
          <Route path={path.SYSTEM} element={<DashboradPage />}/>
          <Route path={path.USER}  element={<DashboradPage />}/>
         {/* <Route path={path.PRODUCTS} element={<Products />} />  */}
       </Route>
     </Routes>
   </div>

  )
}

export default App
