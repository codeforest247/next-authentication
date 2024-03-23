import CommonImage from '@/components/CommonImage'
import Form from '@/components/Form'
import React from 'react'


export default function Login() {
  return (
    <div className='flex flex-col justify-between items-center sm:px-24 sm:flex-row bg-[#EAE9E8] h-screen'>
      <div className='text-center w-full sm:w-1/2 p-10'>
        <Form
          title = "Welcome to Faizan's World!"
          subTitle = 'Please enter your details'
          inputName = {false}
          remember = {true}
          email = {true}
          password = {true}
          otp = {false}
          button = 'Log In'
          mailButton='Log in with Email'
        />
      </div>
      <div className='hidden p-24 sm:flex sm:w-1/2'>
        <CommonImage
          src = "/utilities/logIn.png"
          title = "Login Image"
        />
      </div>
    </div>
  )
}
