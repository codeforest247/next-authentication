"use client";
import Image from 'next/image'

interface Props {
    title: string;
    subTitle: string;
  }

const Form = ({  title, subTitle }: Props) => {

  return (
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
  )
}

export default Form