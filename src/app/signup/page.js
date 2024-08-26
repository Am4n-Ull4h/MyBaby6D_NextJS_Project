"use client";

import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for styling


function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const fieldsError = useRef();
  const emailError = useRef();
  const passwordError = useRef();
  const passRePassError = useRef();

  let router = useRouter();

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const checkRestrictions = () => {
    if (email === "" || password === "" || reEnterPassword === "") {
      fieldsError.current.style.display = "block";
    } else {
      fieldsError.current.style.display = "none";
      if (!email.includes("@") || !email.includes(".") ) {
        emailError.current.style.display = "block";
      } else {
        emailError.current.style.display = "none";
        if (password.length < 8) {
        passwordError.current.style.display = "block";
        }else {
          passwordError.current.style.display = "none";
          if (password!== reEnterPassword) {
            passRePassError.current.style.display = "block";
          } else {
            passRePassError.current.style.display = "none";
            handleSignup();
            setTimeout(() => {
              router.push("/login");
            }, 2000);
            
          }
        }

      }
    }

  };

  const handleSignup = async () => {
    try {
      const user = await createUserWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
      setReEnterPassword("");


      toast.success("Account successfully created!", {
        position: "top-right",
        autoClose: 5000,  // Auto-close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      alert('Something went wrong')
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <div className="GradientBG2 h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[70%]  bg-[#F5F5F5] rounded-xl pb-8">
          <h1 className="text-center font-extrabold text-[#ED82B8] text-xl my-5">
            Sign up
          </h1>

          <form className="w-[70%] mx-auto flex flex-col text-[#000000a1] text-[12px]" onSubmit={(e)=>e.preventDefault()}>
            <p className="py-2 text-red-800 hidden" ref={fieldsError}>
              *Please fill all fields
            </p>
            <label htmlFor="Email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              autoComplete="email"
              
            />
            <p className="py-2 text-red-800 hidden" ref={emailError}>*Enter a valid email</p>

            <label htmlFor="Password" className="text-sm mt-5">
              Password
            </label>
            <input
              type="password"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="current-password"
            />
            <p className="py-2 text-red-800 hidden" ref={passwordError}>*Password must be greater than 8 characters</p>

            <label htmlFor="Password" className="text-sm mt-5">
              Re-enter Password
            </label>
            <input
              type="password"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setReEnterPassword(e.target.value)}
              value={reEnterPassword}
              autoComplete="current-password"
            />
            <p className="py-2 text-red-800 hidden" ref={passRePassError}>*Password and Re-Enter password not matched</p>


            <button
              type="button"
              className="mt-7 bg-[#86DEF4] rounded-lg py-1 text-white font-bold shadow"
              onClick={checkRestrictions}
            >
              Sign up
            </button>

            <p className="mt-2 font-extralight text-[10px] text-[#0000004c]">
              Already have an account? <Link href="/login" className="text-[#ED82B8]">Sign In</Link>
            </p>

          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUpPage;
