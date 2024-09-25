"use client"

import React, { Fragment, useEffect } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import CheckoutButton from "../Components/CheckoutButton";
import { useRouter } from 'next/navigation'; // Adjust based on your Next.js version
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config"; // Adjust the path based on your project structure
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function PaymentPage() {
  const [user, loading] = useAuthState(auth); // Check user authentication state
  const router = useRouter(); // Create router instance

  useEffect(() => {
    // Redirect to login if user is not logged in and not loading
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Prevent rendering during loading
  if (loading) return <p className='h-[90vh] w-full flex justify-center items-center text-2xl font-bold'>Please wait...</p>; 

  return (
    <Fragment>
      <Navbar/>
      <div className="w-full GradientBG3 sm:h-[90vh]">
        <div className="w-[80%] flex sm:flex-row flex-col justify-around items-center h-full mx-auto">
          <div className="lg:w-[25%] md:w-[35%] sm:w-[45%] w-[70%] sm:mt-0 PaymentBox mt-8 rounded-2xl px-5 py-6 bg-[#000000] text-[#FFFFFF]">
            <h1 className="font-bold">One Picture</h1>
            <p className="font-bold text-[25px] paymentPrice">
              $14.99<span className="font-medium text-[18px]">/img</span>
            </p>
            <div className="text-[#E7F5FF] mt-12">
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Single generation</p>
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Not Postable on social media</p>
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Normal Quality without Upscaling</p>
            </div>
            <CheckoutButton amount={1499} />
          </div>
          <div className="lg:w-[25%] md:w-[35%] sm:w-[45%] w-[70%] sm:my-0 PaymentBox my-8 rounded-2xl px-5 py-6 bg-[#000000] text-[#FFFFFF]">
            <h1 className="font-bold">Professional</h1>
            <p className="font-bold text-[25px] paymentPrice">
              $299.99<span className="font-medium text-[18px]">/mo</span>
            </p>
            <div className="text-[#E7F5FF] mt-12">
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Multiple generations</p>
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Postable on social media</p>
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> High quality generations with upscaling</p>
            </div>
            <CheckoutButton amount={29999} />
          </div>
        </div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default PaymentPage;
