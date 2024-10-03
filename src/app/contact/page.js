"use client";

import Link from "next/link";
import React, { Fragment, useState } from "react";

function ContactPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Fragment>
      <div className="GradientBG3 h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[70%]  bg-[#F5F5F5] rounded-xl pb-8">
          <h1 className="text-center font-extrabold text-[#ED82B8] text-xl my-5">
            Contact Us
          </h1>

          <form className="w-[70%] mx-auto flex flex-col text-[#000000a1] text-[12px]">
            <label htmlFor="Email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />

            <label htmlFor="Message" className="text-sm mt-5">
              Message
            </label>
            <textarea name="" id="" 
              className="outline-none py-1 rounded ps-2 h-[25vh] inpShadow"
              onChange={(e) => setMessage(e.target.value)}
              ></textarea>

            

            <button
              type="button"
              className="mt-7 bg-[#86DEF4] rounded-lg py-1 text-white font-bold shadow"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactPage;
