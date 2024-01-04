import React from 'react'
import Image from "next/image"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import twitter from "../../assets/twitter.svg"
import youtube from "../../assets/youtube.svg"
import pho from "../../assets/pho.svg"
import ema from "../../assets/ema.svg"
import loc from "../../assets/loc.svg"

const Footer = () => {
  return (
    <section>
        <div className='w-full bg-white p-5 md:p-20'>
            <div className='flex md:flex-row flex-col justify-around items-center md:items-start pt-5'>
                <div className='p-5 w-full'>
                    <ul>
                        <li className='text-2xl font-bold text-black'>Cleaner</li>
                        <li className='mt-5'>We Are Premium Cleaning Company  in USA ready to make your life easier!!</li>
                        <li>
                            <div className='flex gap-4 mt-5'>
                                <Image src={facebook} alt='facebook-icon' height={37} width={37} />
                                <Image src={instagram} alt='instagram-icon' height={37} width={37} />
                                <Image src={twitter} alt='twitter-icon' height={37} width={37} />
                                <Image src={youtube} alt='youtube-icon' height={37} width={37} />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='p-5 w-full'>
                    <ul>
                        <li className='font-medium md:font-semibold md:text-lg text-primary-700'>Navigation</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>Home</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>About Us</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>Services</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>Contact Us</li>
                    </ul>
                </div>
                <div className='p-5 w-full'>
                    <ul>
                        <li className='font-medium md:font-semibold md:text-lg text-primary-700'>Quick Links</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>Privacy Policy</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>Terms Of Service</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>Disclaimer</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-2'>Faq</li>
                    </ul>
                </div>
                <div className='p-5 w-full'>
                    <ul>
                        <li className='font-medium md:font-semibold md:text-lg text-primary-700'>Contact Info</li>
                        <li className='text-secondary-300 text-sm md:text-base mt-5'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <Image src={pho} alt='phone' height={24} width={24} />
                                </div>
                                <div className='text-secondary-300 text-sm md:text-bas'>123-456-7890</div>
                            </div>
                        </li>
                        <li className='text-secondary-300 text-sm md:text-base mt-5'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <Image src={ema} alt='email' height={24} width={24} />
                                </div>
                                <div className='text-secondary-300 text-sm md:text-bas'>info@companyemail.com</div>
                            </div>
                        </li>
                        <li className='text-secondary-300 text-sm md:text-base mt-5'>
                            <div className='flex items-center gap-4'>
                                <div>
                                    <Image src={loc} alt='location' height={24} width={24} />
                                </div>
                                <div className='text-secondary-300 text-sm md:text-bas'>1111 Avenue Francis Road, Laval, USA</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bg-primary-700 w-full flex items-center justify-center'>
            <div className='font-medium text-white my-5'>Copyright ©Codesham 2024 | All Rights Reserved</div>
        </div>
    </section>
  )
}

export default Footer