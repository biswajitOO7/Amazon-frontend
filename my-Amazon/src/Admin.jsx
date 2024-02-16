import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import UserContextProvider2 from './context/UserContextProvide2'

export default function Admin() {
  return (
    <div>
      <UserContextProvider2>
      <Navbar/>
      <Outlet/>

      </UserContextProvider2>
    </div>
  )
}
