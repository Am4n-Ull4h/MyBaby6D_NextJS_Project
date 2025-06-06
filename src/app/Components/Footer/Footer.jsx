import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { Fragment, useContext } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import FrenchFooter from '../FrenchTranslate/FrenchFooter';
import { ProfileContext } from '../ContextApi/Context';


function Footer() {
  let { translate } = useContext(ProfileContext)


    let navigate = useRouter()
  return (
    <Fragment>
        {
            translate ? <FrenchFooter /> :
        <div className='w-full bg-[#121212] p-5 pt-7 text-[#f5f5f59d]'>
            <div className='flex justify-evenly'>
                <div className='md:w-[40%] w-[48%]'>
                    <p className='text-lg font-light text-center'>Follow us on social media for regular freebies and exclusive offers!</p>
                    <div className='flex justify-between lg:w-[35%] md:w-[50%] sm:w-[70%] mx-auto mt-5'>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#F5F5F5] text-black text-[22px]'>
                        
                        <Link href="" className='flex justify-center items-center h-full w-full' > 
                        <FaInstagram />
                        </Link>

                        </div>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#F5F5F5] text-black text-[22px]'>
                        <Link href="" className='flex justify-center items-center h-full w-full' > 
                        <FaTwitter />

                        </Link>

                        </div>
                        <div className='h-[40px] w-[40px] rounded-full bg-[#F5F5F5]  text-black text-[22px]'>
                        <Link href="" className='h-full w-full flex justify-center items-center' > 
                        <FaFacebook />
                        </Link>

                        </div>

                    </div>
                </div>
                <div className='md:w-[40%] w-[48%]'>
                    <p className='text-lg font-light text-center'>Got questions or comments? We're here to listen.</p>
                    <button className='mt-5 rounded-xl bg-[#F5F5F5] font-bold sm:px-7 px-3 py-2 text-[#121212] block mx-auto' onClick={()=>navigate.push('/contact')}>Contact us</button>
                </div>
            </div>
            <div className='md:w-[80%] w-[90%] mx-auto text-lg mt-8 font-light text-center'>
            The provided service does not claim to predict or guarantee the appearance or gender of a baby. Any information or results obtained through the use of this service should not be considered as a definitive determination and are solely for entertainment purposes.
            <br /> © 2024 - All Rights Reserved
            </div>

        </div>
        }

      
    </Fragment>
  )
}

export default Footer
