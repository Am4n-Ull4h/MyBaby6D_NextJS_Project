import { useRouter } from 'next/navigation'
import React, { Fragment } from 'react'

function Footer() {

    let navigate = useRouter()
  return (
    <Fragment> <br />
        <div className='w-full bg-[#121212] p-5 text-[#f5f5f59d]'>
            <div className='flex justify-evenly mt-5'>
                <div className='md:w-[40%] w-[48%]'>
                    <p className='text-lg font-light'>Follow us on social media for regular freebies and exclusive offers!</p>
                    <div className='flex justify-between lg:w-[35%] md:w-[50%] sm:w-[70%] mt-5'>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#F5F5F5]'></div>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#F5F5F5]'></div>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#F5F5F5]'></div>

                    </div>
                </div>
                <div className='md:w-[40%] w-[48%]'>
                    <p className='text-lg font-light'>Got questions or comments? We're here to listen.</p>
                    <button className='mt-5 rounded-xl bg-[#F5F5F5] font-bold sm:px-7 px-3 py-2 text-[#121212]' onClick={()=>navigate.push('/contact')}>Contact us</button>
                </div>
            </div>
            <div className='md:w-[80%] w-[90%] mx-auto text-lg mt-8 font-light text-center'>
            The provided service does not claim to predict or guarantee the appearance or gender of a baby. Any information or results obtained through the use of this service should not be considered as a definitive determination and are solely for entertainment purposes.
            <br /> © 2024 - All Rights Reserved
            </div>

        </div>
      
    </Fragment>
  )
}

export default Footer
