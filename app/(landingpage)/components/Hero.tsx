import React from 'react'
import Image from "next/image"

const Hero = () => {
  return (
    <div className='h-1/2 w-full flex flex-col justify-center items-center'>
        <Image
        src="/assets/cta.svg"
        alt="CTA Background"
        width={1450}
        height={899}
        className="absolute inset-0 w-full h-full object-cover"
        />
        <div className='mt-12'>
            <div>
                <p className='text-primary-700 font-semibold text-xl text-center'>Professional Cleaning Service</p>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <p className='font-bold md:max-w-[80%] max-w-[90%] mb-5 md:text-6xl text-5xl text-center font-heading font-bold'>Book us and get a one in a lifetime experience</p>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <p className='text-black text-base font-light md:text-center md:max-w-[50%] max-w-[90%] mb-12 md:text-center'>Clean: Your All-In-One Solution cleaning service in the UK. Best among the rest.!</p>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex gap-8'>
                    <button className='bg-primary-700 text-white font-medium text-base md:text-xl py-4 w-40 md:w-52 rounded-lg'>Book A Schedule</button>
                    <button className='text-primary-700 border-2 border-primary-700 bg-white font-medium text-base md:text-xl py-4 w-40 md:w-52 rounded-lg'>Our Best Offer</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero