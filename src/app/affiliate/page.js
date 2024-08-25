"use client"

import React, { Fragment } from "react";
import { useRouter } from "next/navigation";

let TermsData = [
    {
        content : 'You will be paid via wise.com. The minimum payout amount is $10.'
    },
    {
        content : 'You will receive a 20% commission for each order placed by customers you refer through your affiliate link. This commission applies for a duration of 1 month following their initial visit.'
    },
    {
        content : 'Self-referrals are not allowed (i.e.using Photorealistic Ultrasound through your own affiliate link).'
    },
    {
        content : 'Any abusive behaviours, gaming, or attempts to deceive customers such as posting fraudulent discounts on coupon-sharing platforms, will lead to an immediate and permanent ban on your affiliate account.'
    },
    {
        content : 'Direct competition with our marketing efforts such as search engine advertisements, especially those targeting branded terms or domain names, or Facebook ads, are not allowed as it may lead to customer confusion.'
    },
    {
        content : 'Misrepresentation in any form, such as impersonating as one of our employees, is strictly prohibited.'
    },
    {
        content : 'We retain the right to modify the Terms of Service for our affiliate program at any given time, without prior notice.'
    },
]



function AffiliatePage() {


    let navigate = useRouter()
  return (
    <Fragment>
      <div className="GradientBG3 text-[#121212] pb-12">
      <div className="text-center pt-12">
        <h1 className="md:text-[40px] text-[30px] font-extrabold ">
           <span className="TomatoFont">Affiliate</span> Program
        </h1>
        <p className="text-[#121212df] mt-3 text-lg font-semibold">
        Get <span className="TomatoFont">20%</span> from every order you bring
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-lg font-semibold">Terms</h1>
        <div className="ps-5">
            {
                TermsData.map((item, index) => (
                    <li key={index} className="py-4 text-[17px] font-light">
                        {item.content}
                    </li>
                ))
            }
        </div>

        <h1 className="text-center text-[#121212df] text-2xl font-medium mt-10"><span className="TomatoFont">Join</span> the program & start earning money</h1>
        <p className="text-center text-sm w-[60%] mt-4 mx-auto">Please describe how you plan to promote Photorealistic Ultrasound. If on social media, please include links to your profiles.</p>

        <button className="block mx-auto px-8 py-2 TomatoBG rounded-xl font-bold mt-5" onClick={()=> navigate.push('/contact')}>Contact Us</button>
      </div>
      
      </div>
    </Fragment>
  );
}

export default AffiliatePage;
