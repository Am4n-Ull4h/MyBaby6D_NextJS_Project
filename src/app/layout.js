"use client";

import { Raleway } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import { lazy, Suspense } from "react";


const Navbar = lazy(() => import("./Components/Navbar/Navbar"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

const inter = Raleway({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  let pathName = usePathname();


  const noFooterRoutes = ["/login", "/signup", "/upload", "/reset"];
  const noNavbarRoutes = ["/upload", "/login", "/signup", "/reset"];



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
        <Suspense fallback={null}>
          
          {!noNavbarRoutes.includes(pathName) && <Navbar />}

          {children}
          {!noFooterRoutes.includes(pathName) && <Footer />}
        </Suspense>
      </body>
    </html>
  );
}
