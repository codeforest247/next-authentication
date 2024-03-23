"use client";
import React from 'react'
import Image from 'next/image';

interface Props {
  src: string;
  title: string;
}

const CommonImage = ({ src, title }: Props) => {
  return (
    <Image
          src= {src}
          alt= {title}
          width={500}
          height={500}
          className='py-5 sm:w-full'
      />
  )
}

export default CommonImage
