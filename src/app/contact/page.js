"use client";

import Link from "next/link";
import React, { Fragment, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


function ContactPage() {
  const [email, setEmail] = useState(false);
  // const [message, setMessage] = useState("");
  const [user] = useAuthState(auth);


  // console.log(user.displayName)


  const handleSubmit = async (e) =>{
    setEmail(true)
    e.preventDefault();
    

   try{
    if(e.target.email.value || e.target.message.value || user.displayName){
      let response = await axios.post('/api/contact', JSON.stringify(
        {
          name : user?.displayName,
          email :e.target.email.value,
          message :e.target.message.value
        }
      ), {
        headers : {
          "Content-Type" : "application/json"
        }
      })
      // console.log(response)
      // setEmail(false)
      if (response.status == 200){
        e.target.email.value = ''
       e.target.message.value = ''
      setEmail(false)
      toast.success("Email Sent Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      }else{
      setEmail(false)
      toast.error("Email not sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      }

    }else{
      console.log('All data not found')
      setEmail(false)
    }
   }catch(e){
    console.log(e)
    setEmail(false)
    }

   }

    
  

  return (
    <Fragment>
            <ToastContainer position="top-right" autoClose={3000} />
      <div className="GradientBG3 h-[90vh] w-full flex justify-center items-center">
        <div className="lg:w-[30%] md:w-[40%] sm:w-[50%] w-[70%]  bg-[#F5F5F5] rounded-xl pb-8">
          <h1 className="text-center font-extrabold text-[#ED82B8] text-xl my-5">
            Contact Us
          </h1>

          <form className="w-[70%] mx-auto flex flex-col text-[#000000a1] text-[12px]" onSubmit={handleSubmit}>
            <label htmlFor="Email" className="text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="outline-none py-1 rounded ps-2 inpShadow"
              // onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />

            <label htmlFor="Message" className="text-sm mt-5">
              Message
            </label>
            <textarea name="message" id="" 
            required
              className="outline-none py-1 rounded ps-2 h-[25vh] inpShadow"
              // onChange={(e) => setMessage(e.target.value)}
              ></textarea>

            

            <button
              type="submit"
              className="mt-7 bg-[#86DEF4] rounded-lg py-1 text-white font-bold shadow"
              disabled={email? true : false}
            >
              {email? "Submiting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactPage;
