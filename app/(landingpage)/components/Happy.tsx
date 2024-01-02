import React from 'react'
import Image from "next/image"
import quote from "../../assets/quote.svg"
import avatar1 from "../../assets/avatar1.svg"
import avatar2 from "../../assets/avatar2.svg"
import avatar3 from "../../assets/avatar3.svg"
import rating from "../../assets/rating.svg"

const Happy = () => {
  return (
    <div className='h-1/2 w-full bg-white'>
        <div className='p-5 md:px-24 py-10'>
            <div className='flex gap-4 mb-5'>
                <hr className='mt-2 md:mt-3 border-primary-700 w-10' />
                <p className='text-primary-700 text-sm'>HAPPY CLIENTS</p>
            </div>
            <div className='flex md:flex-row flex-col justify-around items-center md:items-start pt-5 z-2'>
                <div className='p-5'>
                    <div className='ml-5'>
                        <Image src={quote} width={50} height={50} alt='quote-icon' />
                    </div>
                    <div className='h-1/2 bg-grays-500 rounded-xl rounded-lg w-80 p-5 -mt-5'>
                        <div className='flex justify-center items-center'>
                            <div className='py-5'>
                                <div className='text-grays-400'>“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”</div>
                                <div className='py-5'>
                                    <hr className='border-grays-400 w-full' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-8'>
                                        <div className='flex items-center gap-4'>
                                            <Image src={avatar1} width={56} height={56} alt='avatar1' />
                                            <div>
                                                <div className='font-medium md:font-bold md:text-lg'>Javier</div>
                                                <div className='text-grays-600 text-sm md:text-base'>Husband</div>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={rating} width={102} height={14} alt='rating' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <div className='ml-5'>
                        <Image src={quote} width={50} height={50} alt='quote-icon' />
                    </div>
                    <div className='h-1/2 bg-grays-500 rounded-xl rounded-lg w-80 p-5 -mt-5'>
                        <div className='flex justify-center items-center'>
                            <div className='py-5'>
                                <div className='text-grays-400'>“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”</div>
                                <div className='py-5'>
                                    <hr className='border-grays-400 w-full' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-8'>
                                        <div className='flex items-center gap-4'>
                                            <Image src={avatar2} width={56} height={56} alt='avatar1' />
                                            <div>
                                                <div className='font-medium md:font-bold md:text-lg'>Chintya</div>
                                                <div className='text-grays-600 text-sm md:text-base'>Wife</div>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={rating} width={102} height={14} alt='rating' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-5'>
                    <div className='ml-5'>
                        <Image src={quote} width={50} height={50} alt='quote-icon' />
                    </div>
                    <div className='h-1/2 bg-grays-500 rounded-xl rounded-lg w-80 p-5 -mt-5'>
                        <div className='flex justify-center items-center'>
                            <div className='py-5'>
                                <div className='text-grays-400'>“I love that I can spend more time with my husband, children, and family, and less time stressing over getting my house clean.”</div>
                                <div className='py-5'>
                                    <hr className='border-grays-400 w-full' />
                                </div>
                                <div>
                                    <div className='flex items-center gap-8'>
                                        <div className='flex items-center gap-4'>
                                            <Image src={avatar3} width={56} height={56} alt='avatar1' />
                                            <div>
                                                <div className='font-medium md:font-bold '>Mr Braun</div>
                                                <div className='text-grays-600 text-sm'>CEO</div>
                                            </div>
                                        </div>
                                        <div>
                                            <Image src={rating} width={102} height={14} alt='rating' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
  )
}

export default Happy