
import { Outlet } from 'react-router-dom'
import './App.css'

import Navbarnew from './components/Navbarnew'

import UserContextProvider from './context/UserContextProvider'


function App() {


  return (
    <>

<UserContextProvider>

      <Navbarnew/>
    
      <Outlet/>
</UserContextProvider>

  
    </>
  )
}

export default App
