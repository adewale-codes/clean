import React from 'react'
import Image from "next/image"
import second from "../../assets/second.svg"
import image1 from "../../assets/image1.svg"
import image2 from "../../assets/image2.svg"

const Get = () => {
  return (
    <div className='h-1/2 w-full p-5 md:p-20 bg-grays-200'>
        <div className='flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start md:gap-56'>
            <div className='w-full'>
                <div>
                    <div className='flex gap-4'>
                        <hr  className='mt-2 md:mt-3 border-primary-700 w-10'/>
                        <p className='text-primary-700 text-sm'>GET OUR SERVICE</p>
                    </div>
                </div>
                <div className='mt-5 text-secondary-500 font-bold text-2xl md:text-4xl'>How To Get Our Service</div>
                <div>
                    <div className='flex gap- items-center'>
                        <Image src={second} alt='document-icon' width={120} height={120} />
                        <div>
                            <ul>
                                <li className='text-secondary-800 font-medium md:font-bold text-xl text-2xl'>Choose Your Time</li>
                                <li className='text-secondary-900 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <hr className='border-grays-300 w-full my-5' />
                    </div>
                </div>
                <div>
                    <div className='flex gap- items-center'>
                        <Image src={second} alt='document-icon' width={120} height={120} />
                        <div>
                            <ul>
                                <li className='text-secondary-800 font-medium md:font-bold text-xl text-2xl'>Choose Your Time</li>
                                <li className='text-secondary-900 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <hr className='border-grays-300 w-full my-5' />
                    </div>
                </div>
                <div>
                    <div className='flex gap- items-center'>
                        <Image src={second} alt='document-icon' width={120} height={120} />
                        <div>
                            <ul>
                                <li className='text-secondary-800 font-medium md:font-bold text-xl text-2xl'>Choose Your Time</li>
                                <li className='text-secondary-900 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <hr className='border-grays-300 w-full my-5' />
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div>
                    <div>
                        <Image src={image1} alt='staff' width={518} height={419} />
                    </div>
                </div>
                <div className='flex gap-8 mt-5 items-center'>
                    <div>
                        <Image src={image2} alt='staff' width={300} height={300} />
                    </div>
                    <div className='text-secondary-900'><span className='font-bold'>Fringilla scelerisque </span>in imperdiet nisi erat in id. Vel fermentum aenean aenean id ornare vitae sapien nulla auctor. At nisl sem eget orci pretium sed.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Get