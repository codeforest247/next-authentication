import React from 'react'

const OtpInput = () => {
  return (
    <input 
        type="text" 
        className='w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500'
        maxLength={1}
        pattern='[0-9]'
        inputMode='numeric'
        autoCapitalize='one-time-code'
        required
    />
  )
}

export default OtpInput