import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useState } from "react";
import { MdOutlineSegment } from "react-icons/md";


function Navbar() {
  let navigate = useRouter();
  let pathName = usePathname();
  const [nav, setNav] = useState(false)

  return (
    <Fragment>
      <nav className="bg-[#121212] px-7 flex justify-between items-center h-[10vh]">
        <div className="h-[70px] w-[170px] flex items-center justify-center overflow-hidden">
          <img
            src="./Logo.png"
            className="cursor-pointer h-[200px] shadow"
            onClick={() => navigate.push("/")}
            alt=""
          />
        </div>

        <ul className="md:flex hidden justify-between lg:w-[25%] md:w-[35%]  Navbarr">
          <li>
            <Link
              href="/"
              className={`${
                pathName === "/" ? "text-[#F05454]" : "text-[#F5F5F5]"
              } text-sm hover:text-[#F05454]`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={`${
                pathName === "/blog" ? "text-[#F05454]" : "text-[#F5F5F5]"
              } text-sm hover:text-[#F05454]`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/affiliate"
              className={`${
                pathName === "/affiliate"
                  ? "text-[#F05454]"
                  : "text-[#F5F5F5] text-sm hover:text-[#F05454]"
              }`}
            >
              Affiliate
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathName === "/contact" ? "text-[#F05454]" : "text-[#F5F5F5]"
              } text-sm hover:text-[#F05454]`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Link
            href="/login"
            className="text-[#F5F5F5] mr-5 text-sm hover:text-[#F05454]"
          >
            Login
          </Link>
          <Link href="/signup" className="text-[#F05454] text-sm">
            Signup
          </Link>
        </div>
        <div className="relative">
          <MdOutlineSegment className="md:hidden block cursor-pointer" onClick={()=>setNav(!nav)}/>
          <div className={`${nav === false ? 'hidden' : 'block'} md:hidden  absolute z-20 -right-4 rounded-xl top-6 bg-[#111111ac] p-5 px-7`}>
            <ul className="Navbarr" onClick={()=>setNav(false)}>
              <li className="my-2">
                <Link
                  href="/"
                  className={`${
                    pathName === "/" ? "text-[#F05454]" : "text-[#F5F5F5]"
                  } text-sm hover:text-[#F05454] py-2 `}
                >
                  Home
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/blog"
                  className={`${
                    pathName === "/blog" ? "text-[#F05454]" : "text-[#F5F5F5]"
                  } text-sm hover:text-[#F05454]`}
                >
                  Blog
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/affiliate"
                  className={`${
                    pathName === "/affiliate"
                      ? "text-[#F05454]"
                      : "text-[#F5F5F5] text-sm hover:text-[#F05454]"
                  }`}
                >
                  Affiliate
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/contact"
                  className={`${
                    pathName === "/contact"
                      ? "text-[#F05454] "
                      : "text-[#F5F5F5]"
                  } text-sm hover:text-[#F05454]`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="block " onClick={()=>setNav(false)}>
              <Link
                href="/login"
                className="text-[#F5F5F5] mr-5 text-sm block py-2 hover:text-[#F05454]"
              >
                Login
              </Link>
              <Link href="/signup" className="text-[#F05454] text-sm">
                Signup
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
