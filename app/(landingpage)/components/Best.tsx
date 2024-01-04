import React from 'react'

const Best = () => {
  return (
    <div className='w-full bg-white p-5 md:p-20'>
        <div className='bg-primary-700 rounded-xl w-full flex flex-col h-full px-5 py-20 items-center'>
            <div>
                <div className='font-bold md:font-extrabold text-3xl md:font-4xl text-white text-center'>Best Cleaning</div>
                <div className='font-bold md:font-extrabold text-3xl md:font-4xl text-white text-center'>Service Company</div>
            </div>
            <div>
                <div className='text-grays-800 text-sm md:text-base text-center mt-5 md:mx-40'>Quisque imperdiet mauris nec faucibus vestibulum. Ut vestibulum est ac hendrerit pharetra. Integer sit amet laoreet lectus</div>
            </div>
            <div className='mt-5'>
                <button className='bg-secondary-400 text-black font-medium text-base md:text-xl py-4 w-40 md:w-52 rounded-lg'>Book Appointment</button>
            </div>
        </div>
    </div>
  )
}

export default Best