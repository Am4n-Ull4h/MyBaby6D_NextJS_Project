"use client"

import React, { Fragment, lazy, Suspense, useState } from 'react'
const UploadNav = lazy(()=>import('./UploadNavbar'))
import { TbCloudUpload } from "react-icons/tb";


function UploadPage() {

    const [ Upload, setUpload ] = useState('')

    let uploadImage = (e) =>{
        let url = URL.createObjectURL(e.target.files[0])
        setUpload(url)
    }
  return (
    <Fragment>
        <Suspense>
            <UploadNav />
        </Suspense>
        <div className='GradientBG3 sm:h-[90vh] w-full flex sm:flex-row flex-col items-center  justify-around'>
            <div className='rounded-xl bg-[#F5F5F5]  xl:w-[15%] lg:w-[20%] md:w-[26%] sm:w-[32%] w-[50%] sm:mt-0 mt-8 flex items-center py-8 flex-col'>
                <h1 className='text-[#ED82B8] font-bold text-[18px]'>Upload Image</h1>
                <div className='w-[90%] relative mx-auto rounded-xl mt-12 bg-[#ADB5BD] h-[30vh] flex flex-col justify-center items-center text-[#000000a1] text-[12px] font-medium'>
                    <TbCloudUpload className='text-[40px] text-[#0000007e] mb-2'/>
                    <p>CHOOSE SCAN</p>
                    <input type="file" name="" className='z-10 cursor-pointer opacity-0 rounded-lg absolute h-full w-full' id="upload" onChange={uploadImage} />
                </div>
                <button className='rounded-md shadow py-1 px-3 bg-[#86DEF4] mt-12'>Generate</button>
            </div>

            <div className='rounded-xl bg-[#F5F5F5] xl:w-[50%] lg:w-[55%] sm:w-[62%] w-[90%] sm:my-0 my-8 flex items-center py-3 flex-col'>
                <h1 className='text-[#ED82B8] mt-7 font-bold text-[18px]'>Results</h1>
                <div className='w-[95%] mx-auto rounded-xl mt-2 bg-[#ADB5BD] h-[45vh]'>
                    { Upload === '' ? '' : <img src={Upload} alt="" className='h-full w-full ' />}
                </div>
             
            </div>


        </div>
      
    </Fragment>
  )
}

export default UploadPage
