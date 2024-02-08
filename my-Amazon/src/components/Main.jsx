import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Main() {
    
    const [users, setUsers] = useState([])
    const {id} = useParams()
  
    useEffect(() => {
      // console.log("hello sdgdfghsdf sdfghfdg")
      loaderUser()
    }, [])
  
    const loaderUser = async () => {
      const result = await axios.get("http://localhost:8080/users")
      setUsers(result.data)
    }

    const { setUser } = useContext(UserContext);
    const addCart = async (user) => {
      console.log(user.product_name)
      try{
        const response = await axios.post('http://localhost:8080/cart',{
          product_name:user.product_name,
          product_type:user.product_type,
          product_color:user.product_color,
          product_price:user.product_price,
        });
        console.log('Product added to MySql',response.data);
        setUser(response.data.id);
      }catch(error){
        console.error('Error saving product:',error);
      }
    }
  
  return (
    <div className='h-screen flex items-center justify-center'>
         {users.map((user, index) => (
    <div className="w-[300px] rounded-md border">
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
          to="/admin"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={()=>addCart(user)}
        >
          Add to Cart
        </Link>
      </div>
    </div>
    ))}
    </div>
  )
}
