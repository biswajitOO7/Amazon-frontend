
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbarnew from './components/Navbarnew'
import Sidebar from './components/Sidebar'
import UserContextProvider from './context/UserContextProvider'

function App() {


  return (
    <>
    <UserContextProvider>
      <Navbarnew/>
      <Sidebar/>
      <Outlet/>
      </UserContextProvider>
    </>
  )
}

export default App
