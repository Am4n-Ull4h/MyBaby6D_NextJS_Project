"use client";

import React, { Fragment, lazy, Suspense, useState, useEffect } from 'react';
const UploadNav = lazy(() => import('./UploadNavbar'));
import { TbCloudUpload } from "react-icons/tb";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from 'next/navigation';
import Footer from '../Components/Footer/Footer';

function UploadPage() {
    const [Upload, setUpload] = useState('');
    const [Upload2, setUpload2] = useState('');
    const [user, loading] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login'); // Redirect to login if no user and not loading
        }
    }, [user, loading, router]);

    const uploadImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setUpload(url);
        }
    };

    if (loading) return; // Optionally show a loading indicator

    return (
        <Fragment>
            <Suspense fallback={null}>
                <UploadNav />
            </Suspense>
            <div className='GradientBG3 sm:h-[90vh] w-full flex sm:flex-row flex-col items-center justify-around'>
                <div className='rounded-xl bg-[#F5F5F5] xl:w-[15%] lg:w-[20%] md:w-[26%] sm:w-[32%] w-[50%] sm:mt-0 mt-8 flex items-center py-8 flex-col'>
                    <h1 className='text-[#ED82B8] font-bold text-[18px]'>Upload Image</h1>
                    <div className='w-[90%] relative mx-auto rounded-xl mt-12 bg-[#ADB5BD] h-[30vh] flex flex-col justify-center items-center text-[#000000a1] text-[12px] font-medium'>
                        {Upload === '' ? <div>
                        <TbCloudUpload className='text-[40px] text-[#0000007e] mb-2 block mx-auto' />
                        <p>CHOOSE SCAN</p>
                        </div> : null}
                        {Upload !== '' && <img src={Upload} alt='Img' className='absolute h-full w-full rounded-2xl' />}
                        <input type="file" className='z-10 cursor-pointer opacity-0 rounded-lg absolute h-full w-full' id="upload" onChange={uploadImage} />
                    </div>
                    <button className='rounded-md shadow py-1 px-3 bg-[#86DEF4] mt-12'>Generate</button>
                </div>
                <div className='rounded-xl bg-[#F5F5F5] xl:w-[50%] lg:w-[55%] sm:w-[62%] w-[90%] sm:my-0 my-8 flex items-center py-3 flex-col'>
                    <h1 className='text-[#ED82B8] mt-7 font-bold text-[18px]'>Results</h1>
                    <div className='w-[95%] mx-auto rounded-xl mt-2 bg-[#ADB5BD] h-[45vh]'>
                        {Upload2 === '' ? '' : <img src='' alt="" className='h-full w-full' />}
                    </div>
                </div>
            </div>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </Fragment>
    );
}

export default UploadPage;
