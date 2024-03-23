"use client";
import OtpInput from '@/subComponent/OtpInput';
import Image from 'next/image'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { REGISTRATION } from '@/apollo/query/auth';
import { Signup } from '@/apollo/types/auth';

interface Props {
    title: string;
    subTitle: string;
    inputName: boolean;
    remember: boolean;
    email: boolean;
    password: boolean;
    otp: boolean;
    button: string;
    mailButton: string;
  }

const Form = ({  title, subTitle, inputName, remember, email, password, otp, button, mailButton }: Props) => {

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
        name:'', email:'', password:''
    })

    const handleInputs = (e: any) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value});
    }

    const handlePost = (e:any) => {        
        const {name, email, password} = user;

        const formData = {
            signupInput: {
                email: email,
                name: name,
                password: password,
                phone: "8801537144364"
            }
        }

        mutate({
            variables:formData
        })
        
        
    }
    

    

    const inputStyle = 'block w-full border-b-2 border-black py-1.5 text-black font-bold placeholder:text-black mb-3 focus:outline-none sm:text-sm sm:leading-6'

  return (
    <div className='border border-gray bg-white p-2 rounded px-5'>
        <div className='text-center'>
            <div className='flex flex-row justify-center'>
                <Image
                    src= '/utilities/logo.png'
                    alt='Faizan Arif'
                    width={200}
                    height={200}
                />
            </div>
            <div className='mb-16'>
                <h1 className='pt-5 text-lg'>{title}</h1>
                <h6 className='text-gray-500 font-light text-xs'>{subTitle}</h6>
            </div>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                {inputName &&
                    <input 
                        type="text" 
                        placeholder='Name' 
                        className={inputStyle}
                        name='name'
                        value={user.name} 
                        onChange={handleInputs}
                    />
                }
                {email &&
                    <input 
                        type="email" 
                        placeholder='Email' 
                        className={inputStyle}
                        name='email'
                        value={user.email} 
                        onChange={handleInputs}
                    />
                }
                {password && 
                    <input 
                        type="password" 
                        placeholder='password' 
                        className={inputStyle}
                        name='password'
                        value={user.password} 
                        onChange={handleInputs}
                    />
                }
            </div>
            {remember &&
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
            }
            {otp && 
                <div>
                    <div className='flex justify-center gap-2 mb-6'>
                        <OtpInput/>                    
                        <OtpInput/>                    
                        <OtpInput/>                    
                        <OtpInput/>            
                    </div>
                    <h6>we send a OTP to faizan*****com</h6>
                </div>
            }
            <div className='my-9'>
                <input
                 type="submit"
                 value={button}
                 onClick={handlePost}
                 className='bg-slate-900 px-9 py-3 cursor-pointer w-3/4 text-gray-100 rounded-full mb-3'
                 />
                 <br />
                 <button className='bg-[#EAE9E8] px-9 py-3 cursor-pointer w-3/4 text-slate-950 rounded-full'>{mailButton}</button>
            </div>
        </form>
    </div>
  )
}

export default Form