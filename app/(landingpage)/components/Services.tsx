import React from 'react'
import Image from "next/image"
import first from "../../assets/first.svg"

const Services = () => {
  return (
    <div className='h-1/2 w-full bg-white pt-10'>
        <div className='p-5 md:px-24 py-10'>
            <div className='flex gap-4 mb-5'>
                <hr className='mt-2 md:mt-3 border-primary-700 w-10' />
                <p className='text-primary-700 text-sm'>BEST SERVICES</p>
            </div>
            <div className='text-secondary-500 font-bold text-2xl md:text-4xl'>What Our Services</div>
            <div className='flex md:flex-row flex-col gap-4 md:gap-96 pt-5'>
                <div className='text-secondary-600 text-sm font-light'>While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:</div>
                <div>
                    <button className='bg-primary-700 text-white h-12 w-36 font-semibold rounded-lg'>See more</button>
                </div>
            </div>
            <div className='flex md:flex-row flex-col justify-around items-start pt-5'>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Recurring Cleaning</div>
                                <div className='text-secondary-700 mt-4'>We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Occasional Cleaning</div>
                                <div className='text-secondary-700 mt-4'>Needs that do not necessarily mean you have a party planned or awaiting a special occasion, or expecting guests.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Apartment Cleaning</div>
                                <div className='text-secondary-700 mt-4'>We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Refrigerator Cleaning</div>
                                <div className='text-secondary-700 mt-4'>Rid of some memories or people to make room for new ones. Some of your loved ones have disappointed.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
            <div className='flex md:flex-row flex-col justify-around items-start pt-5'>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Recurring Cleaning</div>
                                <div className='text-secondary-700 mt-4'>We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Occasional Cleaning</div>
                                <div className='text-secondary-700 mt-4'>Needs that do not necessarily mean you have a party planned or awaiting a special occasion, or expecting guests.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Apartment Cleaning</div>
                                <div className='text-secondary-700 mt-4'>We are taking care of cleaning surfaces on a regular basis so that they don't get overwhelmingly dirty.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-5'>
                    <ul>
                        <li>
                            <div className='h-1/2 bg-white rounded-lg w-64 p-5 drop-shadow'>
                                <Image src={first} width={50} height={50} alt='home-icon' />
                                <div className='text-secondary-500 font-bold text-xl mt-6'>Refrigerator Cleaning</div>
                                <div className='text-secondary-700 mt-4'>Rid of some memories or people to make room for new ones. Some of your loved ones have disappointed.</div>
                                <div className='mt-6 text-primary-700 underline-offset-8'>Learn More</div>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Services