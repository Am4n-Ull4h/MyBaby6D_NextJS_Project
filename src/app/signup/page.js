"use client";

import Link from "next/link";
import React, { Fragment, useRef, useState, useEffect } from "react";
import { useCreateUserWithEmailAndPassword, useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for styling
import Navbar from "../Components/Navbar/Navbar";
import { sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { addUserToDatabase } from "../firebase/addUserToDatabase"

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [ emailUse, setEmailUse ] = useState(false);

  const fieldsError = useRef();
  const emailError = useRef();
  const passwordError = useRef();
  const passRePassError = useRef();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [currentUser] = useAuthState(auth); // Get the current authenticated user
  const router = useRouter();

  // useEffect(() => {
  //   // If the user is logged in, redirect them to the homepage
  //   if (!loading && currentUser) {
  //     router.push("/"); // Redirect to homepage or any other page you prefer
  //   }
  // }, [currentUser, loading, router]);

  const checkRestrictions = () => {
    if (email === "" || password === "" || reEnterPassword === "" || name === "") {
      fieldsError.current.style.display = "block";
    } else {
      fieldsError.current.style.display = "none";
      if (!email.includes("@") || !email.includes(".")) {
        emailError.current.style.display = "block";
      } else {
        emailError.current.style.display = "none";
        if (password.length < 8) {
          passwordError.current.style.display = "block";
        } else {
          passwordError.current.style.display = "none";
          if (password !== reEnterPassword) {
            passRePassError.current.style.display = "block";
          } else {
            passRePassError.current.style.display = "none";
            handleSignup();
          }
        }
      }
    }
  };

  const handleSignup = async () => {
    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(email, password);
      
      if (!userCredential || !userCredential.user) {
        setEmailUse(true)
      }else{
        setEmailUse(false)
      }


      const user = userCredential.user;
      await addUserToDatabase(user.uid);


      // Update profile with displayName
      await updateProfile(user, { displayName: name });

      // Send verification email
      await sendEmailVerification(user);

      // Sign out the user
      await signOut(auth);

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setReEnterPassword("");

      // Redirect to login page
      // router.push("/login");

      toast.success("Account created! Please verify your email.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  if (loading) return <p className='h-[90vh] w-full flex justify-center items-center text-2xl font-bold'>Please wait...</p>; // Return null or a loader while authentication state is loading

  return (
    <Fragment>
      <ToastContainer />
      <Navbar />
      <div className="GradientBG2 h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[70%] bg-[#F5F5F5] rounded-xl pb-8">
          <h1 className="text-center font-extrabold text-[#ED82B8] text-xl my-5">
            Sign up
          </h1>

          <form
            className="w-[70%] mx-auto flex flex-col text-[#000000a1] text-[12px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="py-2 text-red-800 hidden" ref={fieldsError}>
              *Please fill all fields
            </p>
            <label htmlFor="Name" className="text-sm">
              Username
            </label>
            <input
              type="text"
              className="outline-none py-1 rounded ps-2 inpShadow my-2"
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete="name"
            />
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
            {
              emailUse && <p className="text-red-800">Email is already in use.</p>
            }
            <p className="py-2 text-red-800 hidden" ref={emailError}>
              *Enter a valid email
            </p>

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
            <p className="py-2 text-red-800 hidden" ref={passwordError}>
              *Password must be greater than 8 characters
            </p>

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
            <p className="py-2 text-red-800 hidden" ref={passRePassError}>
              *Password and Re-Enter password not matched
            </p>

            <button
              type="button"
              className="mt-7 bg-[#86DEF4] rounded-lg py-1 text-white font-bold shadow"
              onClick={checkRestrictions}
            >
              Sign up
            </button>

            <p className="mt-2 font-extralight text-[10px] text-[#0000004c]">
              Already have an account?{" "}
              <Link href="/login" className="text-[#ED82B8]">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUpPage;
