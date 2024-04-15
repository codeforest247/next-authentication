"use client";
import React, { useEffect, useRef, useState } from 'react'

let currentOTPIndex:number = 0;

function RegistrationForm() {

  const handleSubmit = (e: any) => {
    e.preventDefault(); 
  }

  const inputStyle = 'block w-full border-b-2 border-black py-1.5 text-black font-bold placeholder:text-black mb-3 focus:outline-none sm:text-sm sm:leading-6'

  //for implement otp
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);

  const handleOnChange = ({target}: React.ChangeEvent<HTMLInputElement>):void => {
    const {value} = target;
    const newOTP:string[] = [...otp]
    newOTP[currentOTPIndex] = value

    if(!value) setActiveOTPIndex(currentOTPIndex - 1)
    else setActiveOTPIndex(currentOTPIndex + 1)

    setOtp(newOTP)
  };
  console.log(otp);

  //for focusing the input field

  const handleOnKeyDown = ({key}: React.KeyboardEvent<HTMLInputElement>, index:number) => {
    currentOTPIndex = index
    if(key === 'Backspace') setActiveOTPIndex (currentOTPIndex - 1);
  }

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputRef.current?.focus()
  },[activeOTPIndex])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className='flex justify-center gap-2 mb-6 faizan w-full'>
          {otp.map((_, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  type="text" 
                  className='w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500'
                  maxLength={1}
                  pattern='[0-9]'
                  inputMode='numeric'
                  autoCapitalize='one-time-code'
                  required
                  onChange={handleOnChange} 
                  ref = {index === activeOTPIndex ? inputRef : null}
                  onKeyDown={(e)=>handleOnKeyDown(e, index)}
                />
              </React.Fragment>
            )
          })}          
        </div>
        <h6>we send a OTP to faizan*****com</h6>
      </div>
      
      <div className='my-9'>
        <input
          type="submit"
          value='Verify Now'
          className='bg-slate-900 px-9 py-3 cursor-pointer w-3/4 text-gray-100 rounded-full mb-3'
          />
          <br />
          <button className='bg-[#EAE9E8] px-9 py-3 cursor-pointer w-3/4 text-slate-950 rounded-full'>Resend OTP</button>
      </div>
    </form>
  )
}
export default RegistrationForm

//For better understanding watch 
// https://www.youtube.com/watch?v=1Mz07nptjWU   I was see 17:00 sec