"use client";
import { LOGIN } from '@/apollo/query/auth';
import { Login } from '@/apollo/types/auth';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react'

function LoginForm() {
// for backend

const [mutate, {loading}] = useMutation<Login>(LOGIN, {
  onCompleted: (data) => {
    console.log("LOGIN==>>", data);    
  },
  onError: (error) => {
    console.log(error.message);
  }
})



const [user, setUser] = useState({
    name:'', email:'', password:''
})

const handleInputs = (e: any) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
}
const handlePost = () => {
  const {email, password} = user;

  const formData = {
    loginInput: {
      password: password,
      phoneOrEmail: email
    }
  }
  mutate({
    variables: formData
  })
}
const handleSubmit = (e: any) => {
  e.preventDefault(); 
 }

  const inputStyle = 'block w-full border-b-2 border-black py-1.5 text-black font-bold placeholder:text-black mb-3 focus:outline-none sm:text-sm sm:leading-6'

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            placeholder='Email' 
            className={inputStyle}
            name='email'
            value={user.email} 
            onChange={handleInputs}
          />
          <input 
            type="password" 
            placeholder='password' 
            className={inputStyle}
            name='password'
            value={user.password} 
            onChange={handleInputs}
          />
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row'>
            <input type="checkbox" />
            <h6 className='ml-3 text-gray-900'>Remember for 30 days</h6>
          </div>
          <div>
            <a href="/">
              <h6 className='text-gray-500'>Forgot Password?</h6>
            </a>
          </div>
        </div>
        
        <div className='my-9'>
          <input
            type="submit"
            value='Log In'
            onClick={handlePost}
            className='bg-slate-900 px-9 py-3 cursor-pointer w-3/4 text-gray-100 rounded-full mb-3'
            />
            <br />
            <button className='bg-[#EAE9E8] px-9 py-3 cursor-pointer w-3/4 text-slate-950 rounded-full'>Log in with Email</button>
        </div>
    </form>
  )
}

export default LoginForm