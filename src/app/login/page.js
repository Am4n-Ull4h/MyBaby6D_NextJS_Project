"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment, useRef, useState, useEffect, Suspense } from "react";
import { useSignInWithEmailAndPassword, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Navbar from "../Components/Navbar/Navbar";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginError = useRef();
  // const fieldsError = useRef();

  const navigate = useRouter();

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return; // Do nothing while loading
    if (user) navigate.push("/"); // Redirect if user is logged in
  }, [user, loading, navigate]);

  const handleSignIn = async () => {
    try {
      if (email !== "" && password !== "") {
        const res = await signInWithEmailAndPassword(email, password);
        setEmail("");
        setPassword("");
        if (res) {
          loginError.current.style.display = "none";
          navigate.push("/");
        } else {
          loginError.current.innerHTML = "*Email & Password not matched";
          loginError.current.style.display = "block";
        }
      } else {
        loginError.current.innerHTML = "*Please fill all fields";
        loginError.current.style.display = "block";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>
      <div className="GradientBG2 h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[70%] bg-[#F5F5F5] rounded-xl pb-8">
          <h1 className="text-center font-extrabold text-[#ED82B8] text-xl my-5">
            Login
          </h1>

          <form
            className="w-[70%] mx-auto flex flex-col text-[#000000a1] text-[12px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="py-2 text-red-800 hidden" ref={loginError}>
              *Email & Password not matched
            </p>
            {/* <p className="py-2 text-red-800 hidden" ref={fieldsError}>
              *Please fill all fields
            </p> */}
            <label htmlFor="Email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              value={email}
            />

            <label htmlFor="Password" className="text-sm mt-5">
              Password
            </label>
            <input
              type="password"
              className="outline-none py-1 rounded ps-2 inpShadow"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              value={password}
            />

            <Link
              href=""
              className="mt-2 font-extralight text-[10px] text-[#0000004c]"
            >
              Forgot your password?
            </Link>

            <button
              type="submit"
              className="mt-7 bg-[#86DEF4] rounded-lg py-1 text-white font-bold shadow"
              onClick={handleSignIn}
            >
              Sign In
            </button>
            <button
              type="button"
              className="mt-2 bg-[#FFFFFF] rounded-lg py-1 text-black font-bold inpShadow"
              onClick={() => navigate.push("/signup")}
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginPage;
