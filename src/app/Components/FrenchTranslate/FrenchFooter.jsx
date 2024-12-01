import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React, { Fragment } from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function FrenchFooter() {

    let navigate = useRouter()
  return (
    <Fragment>
        <div className='w-full bg-[#121212] p-5 pt-7 text-[#f5f5f59d]'>
            <div className='flex justify-evenly'>
                <div className='md:w-[40%] w-[48%]'>
                    <p className='text-lg font-light text-center'>Suivez-nous sur les réseaux sociaux pour des cadeaux réguliers et des offres exclusives!</p>
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
                    <p className='text-lg font-light text-center'>Vous avez des questions ou des commentaires ? Nous sommes là pour vous écouter</p>
                    <button className='mt-5 rounded-xl bg-[#F5F5F5] font-bold sm:px-7 px-3 py-2 text-[#121212] block mx-auto' onClick={()=>navigate.push('/contact')}>Contactez-nous</button>
                </div>
            </div>
            <div className='md:w-[80%] w-[90%] mx-auto text-lg mt-8 font-light text-center'>
            Le service proposé ne prétend pas prédire ou garantir l’apparence ou le sexe d’un bébé. Toute information ou tout résultat obtenu grâce à l’utilisation de ce service ne doit pas être considéré comme une détermination définitive et est uniquement destiné à des fins de divertissement.
            <br /> © 2024 - Tous droits réservés
            </div>

        </div>
      
    </Fragment>
  )
}

export default FrenchFooter
