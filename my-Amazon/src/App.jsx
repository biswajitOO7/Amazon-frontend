
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbarnew from './components/Navbarnew'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
      <Navbarnew/>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default App
