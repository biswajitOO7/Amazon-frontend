import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AddUser from './components/AddUser.jsx'
import EditUser from './components/EditUser.jsx'
import Table from './components/Table.jsx'
import ViewUser from './components/ViewUser.jsx'
import './index.css'
import Admin from './Admin.jsx'
import Main from './components/Main.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}>
      <Route path='' element={<Main/>} />
    </Route>
    <Route path='/admin' element={<Admin/>}>
    <Route path='' element={<Table/>}/>
      <Route path='/admin/adduser' element={<AddUser/>}/>
      <Route path='/admin/edituser/:id' element={<EditUser/>}/>
      <Route path='/admin/viewuser/:id' element={<ViewUser/>}/>
    </Route>
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
