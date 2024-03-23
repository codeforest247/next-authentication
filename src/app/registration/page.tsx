import CommonImage from '@/components/CommonImage'
import Form from '@/components/Form'
import React from 'react'

export default function Registration() {
  return (
    <div className='flex flex-col justify-between items-center sm:px-24 sm:flex-row bg-[#EAE9E8] h-screen'>
      <div className='text-center w-full sm:w-1/2 p-10'>
        <Form
          title = "Become a verified member"
          subTitle = "Not verified yet, get verified!"
          inputName = {false}
          remember = {false}
          email = {false}
          password = {false}
          otp = {true}
          button = 'Verify Now'
          mailButton='Resend OTP'
        />
      </div>
      <div className='hidden p-24 sm:flex sm:w-1/2'>
        <CommonImage
          src = "/utilities/otp1.png"
          title = "Login Image"
        />
      </div>
    </div>
  )
}
