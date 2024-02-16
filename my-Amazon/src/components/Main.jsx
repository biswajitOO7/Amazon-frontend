import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'


export default function Main() {
    
    const [users, setUsers] = useState([])

  
    useEffect(() => {
      // console.log("hello sdgdfghsdf sdfghfdg")
      All()
    }, [])
  
    const All = async () => {
      const result = await axios.get("http://localhost:8080/users")
      setUsers(result.data)
    }
    const dell = async () => {
      const result = await axios.get("http://localhost:8080/dell")
      setUsers(result.data)
    }
    const hp = async () => {
      const result = await axios.get("http://localhost:8080/hp")
      setUsers(result.data)
    }
    const range = async () => {
      const result = await axios.get("http://localhost:8080/range")
      setUsers(result.data)
    }

    const {setUser} = useContext(UserContext)

    const addCart = async (user) => {
   
      try{
        const response = await axios.post('http://localhost:8080/cart',{
          product_name:user.product_name,
          product_type:user.product_type,
          product_color:user.product_color,
          product_price:user.product_price
        });
        console.log('Product added to MySql',response.data);
        setUser(response.data.id)
        console.log(response.data.id)
      }catch(error){
        console.error('Error saving product:',error);
      }
    }
  return (

    <>
<aside className="fixed flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
      
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Product Name</label>
            <button
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
             onClick={dell}
            >
              
              Dell
            </button>
            <button
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
             onClick={hp}
            >
              
              HP
            </button>
            <button
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
             onClick={All}
            >
              
              All
            </button>
            
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Color</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              
              <span className="mx-2 text-sm font-medium">Black</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
           
              <span className="mx-2 text-sm font-medium">Red</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
             
              <span className="mx-2 text-sm font-medium">Brown</span>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">Price</label>
            <button
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
             onClick={range}
            >
              
              40000 Rs. - 50000 Rs.
            </button>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
         
              <span className="mx-2 text-sm font-medium">2000 - 3000 Rs</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>









    
    <div className="flex flex-col">
         {users.map((user, index) => (
          <div className="flex w-full mx-5 my-14 flex-wrap items-center justify-center">
    <div className="flex flex-col items-center justify-center rounded-md border">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">Product Details</h1>
        <p className="mt-3 text-sm text-gray-600">
         Details of user id: <span className='text-grey-600'>{user.id}</span>
        </p>
        <p className="mt-3 text-sm font-bold text-gray-600">
          Product Name:  <span className='text-grey-600'>{user.product_name}</span>
        </p>
        <p className="mt-3 text-sm font-bold text-gray-600">
        Product Type: <span className='text-grey-600'>{user.product_type}</span>
        </p>
        <p className="mt-3 text-sm font-bold text-gray-600">
        Product Color: <span className='text-grey-600'>{user.product_color}</span>
        </p>
        <p className="mt-3 text-sm font-bold text-gray-600">
        Product Price: <span className='text-grey-600'>{user.product_price}</span>
        </p>
        <Link
          type="button"
         
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>addCart(user)}
        >
          Add to Cart
        </Link>
      </div>
    </div>
    </div>
    ))}
    </div>
    </>
  )
}
