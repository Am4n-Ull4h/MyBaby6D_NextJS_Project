"use client";

import { Raleway } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { lazy, Suspense, useContext, useEffect } from "react";
import { Context, ProfileContext } from "./Components/ContextApi/Context";
import { CiGlobe } from "react-icons/ci";
import FrenchFooter from "./Components/FrenchTranslate/FrenchFooter";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";



// const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
// const Footer = lazy(() => import("./Components/Footer/Footer"));

const inter = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let pathName = usePathname();


  const noFooterRoutes = ["/login", "/signup", "/reset", "/payment"];
  const noNavbarRoutes = ["/upload",  "/reset", "/payment"];


  // useEffect(()=>{
  //   // Load Google Translate script
  //   const googleTranslateElementInit = () => {
  //     new window.google.translate.TranslateElement({
  //       pageLanguage: 'en',
  //       includedLanguages: 'en,fr', // English and French
  //       layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  //     }, 'google_translate_element');
  //   };

  //   const script = document.createElement('script');
  //   script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  //   document.body.appendChild(script);

  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // })



  return (
    <html lang="en">
      <head>
        <title>MyBaby6D</title>
        <meta
          name="description"
          content="Experience the magic of 6D ultrasounds with MyBaby6D."
        />
        <meta
          name="keywords"
          content="6D ultrasound, baby scan, prenatal imaging, MyBaby6D"
        />
        <meta name="author" content="Aman Ullah" />
        <link rel="icon" href="./Logo.png" />
      </head>
      <body className={inter.className}>
        {/* Language switcher */}
        {/* <div className="absolute text-center  right-3 top-[12vh]">
            <p className="text-black">Lang</p>
        <div id="google_translate_element" ></div>
            <CiGlobe className="text-black block mx-auto"/>

        </div> */}
        {/* <Suspense fallback={null}> */}
          
          <Context>
          {!noNavbarRoutes.includes(pathName) && <Navbar />}
          {children}
          {!noFooterRoutes.includes(pathName) && <Footer />}
          </Context>
        {/* </Suspense> */}
      </body>
    </html>
  );
}
