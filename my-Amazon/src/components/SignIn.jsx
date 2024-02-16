import React, { useContext, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function SignIn() {
    
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {setPass} = useContext(UserContext);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let result = await axios.post('http://localhost:8080/signin',{
            email,password,
        });
        if(result.data == true){
            setPass(true)
            navigate('/admin')
        }else{
            alert("wrong details")
        };
    };
  return (
    <form onSubmit={handleSubmit}>
        <input
        type = "text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}>
    
        </input>
        <input type="password" placeholder='Password' value={password} onChange = {(e)=>setPassword(e.target.value)}>
        </input>
        <button type='submit'>Sign Up</button>

    </form>
  )
}
