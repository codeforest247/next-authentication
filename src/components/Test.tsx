import React, { useEffect, useRef, useState } from 'react';

function RegistrationForm() {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(''));
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
  const inputRefs = useRef<HTMLInputElement[]>(new Array(4).fill(null));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Retrieve the OTP value
    const otpValue = otp.join('');
    console.log('OTP Value:', otpValue);
  };

  const handleOnChange = (index: number, value: string): void => {
    const newOTP: string[] = [...otp];
    newOTP[index] = value;
    if (value) {
      setActiveOTPIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
    }
    setOtp(newOTP);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number): void => {
    if (e.key === 'Backspace' && index > 0) {
      e.preventDefault();
      handleOnChange(index, '');
      setActiveOTPIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
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
      <h6>we send a OTP to faizan*****com</h6>
      <div className="my-9">
        <input
          type="submit"
          value="Verify Now"
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
