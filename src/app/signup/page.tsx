import CommonImage from '@/components/CommonImage'
import Form from '@/components/Form'
import React from 'react'

export default function SignUp() {
  return (
    <div className='flex flex-col justify-between items-center sm:px-24 sm:flex-row bg-[#EAE9E8] h-screen'>
      <div className='text-center w-full sm:w-1/2 p-10'>
        <Form
          title = "Become a member in Faizan's world"
          subTitle = "Let's get started!"
          inputName = {true}
          remember = {false}
          email = {true}
          password = {true}
          otp = {false}
          button = 'Sign up'
          mailButton='Continue with email'
        />
      </div>
      <div className='hidden p-24 sm:flex sm:w-1/2'>
        <CommonImage
          src = "/utilities/signUp.png"
          title = "Login Image"
        />
      </div>
    </div>
  )
}
