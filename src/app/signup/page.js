"use client";

import Link from "next/link";
import React, { Fragment, useState } from "react";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  return (
    <Fragment>
      <div className="GradientBG2 h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[70%]  bg-[#F5F5F5] rounded-xl pb-8">
          <h1 className="text-center font-extrabold text-[#ED82B8] text-xl my-5">
            Sign up
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

            <label htmlFor="Password" className="text-sm mt-5">
              Password
            </label>
            <input
              type="password"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <label htmlFor="Password" className="text-sm mt-5">
              Re-enter Password
            </label>
            <input
              type="password"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setReEnterPassword(e.target.value)}
              autoComplete="current-password"
            />

            <button
              type="button"
              className="mt-7 bg-[#86DEF4] rounded-lg py-1 text-white font-bold shadow"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUpPage;
