'use client'
import { VERIFICATION } from '@/apollo/query/auth';
import { VerifyPhone } from '@/apollo/types/auth';
import { useMutation } from '@apollo/client';

import React, { useEffect, useRef, useState } from 'react';

function RegistrationForm() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

const [user, setUser] = useState({
    number:''
})
 const handleInputs = (e: any) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
}

  //for backend (Apollo Server)

  const [mutate,{loading}] = useMutation<VerifyPhone>(VERIFICATION, {
    onCompleted:(data) => {
      console.log('Faizan==>>', data);
    },
    onError:(error) => {
      console.log(error.message);
    }
  })

  const handlePost = (e:any) => {
    const otpValue = otp.join('');

    const formData = {
      verifyPhoneInput: {
        otp: otpValue,
        phone: user.number
      }
    }
    mutate({
      variables: formData
    })
  }



  // States for OTP input
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRefs = useRef<HTMLInputElement[]>(new Array(4).fill(null));

 

  const handleOnChange = (index: number, value: string): void => {
    const newOTP: string[] = [...otp];
    newOTP[index] = value;

    // Move focus to the next input field if value is entered
    if (value) {
      setActiveOTPIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
    }
    setOtp(newOTP);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    if (e.key === 'Backspace' && index > 0) {
      // Prevent default Backspace behavior
      e.preventDefault();

      // Clear the current input field and move focus to the previous one
      handleOnChange(index, '');
      setActiveOTPIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    // Ref for focusing the input field
    inputRefs.current[activeOTPIndex]?.focus();
  }, [activeOTPIndex]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center gap-2 mb-6 faizan w-full">
        {otp.map((value, index) => (
          <input
            key={index}
            type="text"
            className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            maxLength={1}
            pattern="[0-9]"
            inputMode="numeric"
            autoCapitalize="one-time-code"
            required
            value={value}
            onChange={(e) => handleOnChange(index, e.target.value)}
            ref={(input:HTMLInputElement) => {
              inputRefs.current[index] = input || undefined;
            }}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        ))}
      </div>
      <input 
          type="text" 
          placeholder='Phone Number* (EX: 8801234567890)' 
          className='block w-full border-b-2 border-black py-1.5 text-black font-bold placeholder:text-black mb-3 focus:outline-none sm:text-sm sm:leading-6'
          name='number'
          value={user.number} 
          onChange={handleInputs}
        />
      <h6>we send a OTP to 01*******</h6>
      <div className="my-9">
        <input
          type="submit"
          value="Verify Now"
          onClick={handlePost}
          className="bg-slate-900 px-9 py-3 cursor-pointer w-3/4 text-gray-100 rounded-full mb-3"
        />
        <br />
        <button className="bg-[#EAE9E8] px-9 py-3 cursor-pointer w-3/4 text-slate-950 rounded-full">
          Resend OTP
        </button>
      </div>
    </form>
  );
}

export default RegistrationForm;
