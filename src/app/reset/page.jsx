"use client";

import { useRouter } from "next/navigation";
import React, { Fragment, useState, Suspense } from "react";
import { auth } from "@/app/firebase/config";
import Navbar from "../Components/Navbar/Navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      toast.error("Please enter a valid email!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Reset link sent successfully!", {
        position: "top-right",
        autoClose: 4000,
      });
      setEmail('')
      setTimeout(() => {
        navigate.push('/login')
      }, 5000);
    } catch (error) {
      console.error("Error sending reset email:", error);
      toast.error(`Error: ${error.message}`, {
        position: "top-right",
        autoClose: 4000,
      });
    }
  };

  return (
    <Fragment>
      <ToastContainer />
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <div className="GradientBG2 h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[70%] bg-[#F5F5F5] rounded-xl pb-8">
          <h1 className="text-center font-extrabold text-[#ED82B8] text-xl my-5">
            Forgot Password
          </h1>

          <form
            className="w-[70%] mx-auto flex flex-col text-[#000000a1] text-[12px]"
            onSubmit={handleSubmit}
          >
            <label htmlFor="Email" className="text-sm py-2">
              Enter your email
            </label>
            <input
              type="email"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              value={email}
            />

            <button
              type="submit"
              className="mt-10 bg-[#86DEF4] rounded-lg py-1 text-white font-bold shadow"
            >
              Send Link
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
