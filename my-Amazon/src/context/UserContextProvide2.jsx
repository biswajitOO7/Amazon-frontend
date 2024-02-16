import React, { useState } from "react"
import UserContext from "./UserContext"
export default function UserContextProvider2({children}) {

    const [pass, setPass] = useState(null)
  return (
   <UserContext.Provider value={{pass,setPass}}>
    {children}
   </UserContext.Provider>
  )
}
