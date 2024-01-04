import React from 'react'
import Image from "next/image"
import phone from "../../assets/phone.svg"
import mail from "../../assets/mail.svg"
import location from "../../assets/location.svg"

const Contact = () => {
  return (
    <div className='h-1/2 w-full bg-white p-5 md:p-20'>
        <div className='flex md:flex-row flex-col justify-around items-center md:items-start pt-5'>
            <div className='p-5 w-full'>
                <div className='flex items-center gap-4 mb-5'>
                    <hr className='border-primary-700 w-10' />
                    <p className='text-primary-700 text-sm'>HAPPY CLIENTS</p>
                </div>
                <div>
                    <div className='text-primary-800 font-medium md:font-bold text-3xl md:text-4xl'>Get In Touch</div>
                    <div className='text-secondary-900 text-lg md:text-xl font-medium md:font-semibold mt-5'>Fill up the form and our Team will get back to you within 24 hours.</div>
                </div>
                <div className='flex gap-8 items-center mt-5'>
                    <div>
                        <Image src={phone} alt='phone-icon' width={90} height={90} />
                    </div>
                    <div>
                        <div className='text-primary-700 font-medium md:font-bold text-xl md:text-2xl'>Phone</div>
                        <div className='text-secondary-900'>123-456-7890</div>
                    </div>
                </div>
                <div className='mt-5 w-full'>
                    <hr className='border-secondary-700' />
                </div>
                <div className='flex gap-8 items-center mt-5'>
                    <div>
                        <Image src={mail} alt='phone-icon' width={90} height={90} />
                    </div>
                    <div>
                        <div className='text-primary-700 font-medium md:font-bold text-xl md:text-2xl'>Phone</div>
                        <div className='text-secondary-900'>123-456-7890</div>
                    </div>
                </div>
                <div className='mt-5 w-full'>
                    <hr className='border-secondary-700' />
                </div>
                <div className='flex gap-8 items-center mt-5'>
                    <div>
                        <Image src={location} alt='phone-icon' width={90} height={90} />
                    </div>
                    <div>
                        <div className='text-primary-700 font-medium md:font-bold text-xl md:text-2xl'>Phone</div>
                        <div className='text-secondary-900'>123-456-7890</div>
                    </div>
                </div>
                <div className='mt-5 w-full'>
                    <hr className='border-secondary-700' />
                </div>
               
            </div>
            <div className='p-5 w-full'>
                <div className='bg-primary-700 h-full flex items-center justify-center py-24 rounded-lg'>
                    <div>
                        <form action="" className='flex flex-col'>
                            <label htmlFor="name" className='mb-2 text-white font-medium md:font-semibold text-sm'>Name*</label>
                            <input type="text" className='rounded h-12 w-64 mb-2' required />
                            <label htmlFor="email" className='mb-2 text-white font-medium md:font-semibold text-sm'>Email*</label>
                            <input type="email" className='rounded h-12 w-64 mb-2' required />
                            <label htmlFor="message" className='mb-2 text-white font-medium md:font-semibold text-sm'>Message</label>
                            <textarea name="" id="" className='rounded'></textarea>
                        </form>
                        <div className='mt-5'>
                            <button className='bg-secondary-400 text-black font-medium text-base md:text-xl py-4 w-40 md:w-52 rounded-lg'>Book A Schedule</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact