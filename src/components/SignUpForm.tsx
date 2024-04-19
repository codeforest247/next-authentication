"use client";
import { REGISTRATION } from '@/apollo/query/auth';
import { Signup } from '@/apollo/types/auth';
import { useMutation } from '@apollo/client';
import React, { useState } from 'react'

function SignUpForm() {

  // for backend (Apollo server)
const [mutate,{loading}] = useMutation<Signup>(REGISTRATION, {
  onCompleted:(data) => {
      console.log("faizan::",data);   
  },

  onError:(error) => {
      console.log(error.message);            
  },
})

const handleSubmit = (e: any) => {
  e.preventDefault(); 
}

const [user, setUser] = useState({
    name:'', number:'', email:'', password:''
})

const handleInputs = (e: any) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
}

  // for backend (apollo server)
  const handlePost = (e:any) => {        
    const {name, number,  email, password} = user;

    const formData = {
        signupInput: {
            email: email,
            name: name,
            password: password,
            phone: number
        }
    }

    mutate({
        variables:formData
    })
}

  //tailwind style class
  const inputStyle = 'block w-full border-b-2 border-black py-1.5 text-black font-bold placeholder:text-black mb-3 focus:outline-none sm:text-sm sm:leading-6'

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          placeholder='Name*' 
          className={inputStyle}
          name='name'
          value={user.name} 
          onChange={handleInputs}
        />
        <input 
          type="text" 
          placeholder='Phone Number* (with country code please)' 
          className={inputStyle}
          name='number'
          value={user.number} 
          onChange={handleInputs}
        />
        <input 
          type="email" 
          placeholder='Email*' 
          className={inputStyle}
          name='email'
          value={user.email} 
          onChange={handleInputs}
        />
        <input 
          type="password" 
          placeholder='Password*' 
          className={inputStyle}
          name='password'
          value={user.password} 
          onChange={handleInputs}
        />
      </div>            
      <div className='my-9'>
        <input
          type="submit"
          value='Sign up'
          onClick={handlePost}
          className='bg-slate-900 px-9 py-3 cursor-pointer w-3/4 text-gray-100 rounded-full mb-3'
          />
          <br />
          <button className='bg-[#EAE9E8] px-9 py-3 cursor-pointer w-3/4 text-slate-950 rounded-full'>Continue with email</button>
      </div>
    </form>
  )
}

export default SignUpForm