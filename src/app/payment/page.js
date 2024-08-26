import React, { Fragment } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


function PaymentPage() {
  return (
    <Fragment>
      <div className="w-full GradientBG3 sm:h-[90vh]">
        <div className="w-[80%] flex sm:flex-row flex-col justify-around items-center h-full mx-auto">
          <div className="lg:w-[25%] md:w-[35%] sm:w-[45%] w-[70%] sm:mt-0 PaymentBox mt-8 rounded-2xl px-5 py-6 bg-[#000000] text-[#FFFFFF]">
            <h1 className="font-semibold">Free</h1>
            <p className="font-bold text-[22px]">
              $0<span className="font-medium">/mo</span>
            </p>
            <div className="text-[#E7F5FF] mt-12">
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Single generation</p>
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Not Postable on social media</p>
              <p className="py-2 flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Normal Quality without Upscaling</p>
            </div>
            <button className="block mx-auto py-2 w-full  rounded-lg mt-12 bg-[#323232] font-bold">
              Buy now
            </button>
          </div>
          <div className="lg:w-[25%] md:w-[35%] sm:w-[45%] w-[70%] sm:my-0 PaymentBox my-8 rounded-2xl px-5 py-6 bg-[#000000] text-[#FFFFFF]">
            <h1 className="font-semibold">Premium</h1>
            <p className="font-bold text-[22px]">
              $9.99<span className="font-medium">/mo</span>
            </p>
            <div className="text-[#E7F5FF] mt-12">
              <p className="py-2  flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Multiple generations</p>
              <p className="py-2  flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> Postable on social media</p>
              <p className="py-2  flex items-baseline gap-1 text-[13px]"><IoCheckmarkCircleOutline /> High quality generations with upscaling</p>
            </div>
            {/* <div className="py-2"></div> */}
            <button className="block mx-auto py-2 w-full  rounded-lg mt-12 bg-[#323232] font-bold">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PaymentPage;
