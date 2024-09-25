import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState, useContext } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "@/app/firebase/config"; // Import storage from Firebase config
import { signOut, updateProfile } from "firebase/auth";
import { ImCancelCircle } from "react-icons/im";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"; // Import Firebase Storage methods
import { ProfileContext } from "../ContextApi/Context";


function Navbar() {
  // const [userProfilePic, setUserProfilePic] = useState("./AuthImg.jpg");
  const [picState, setPicState] = useState(false);
  const [nav, setNav] = useState(false);
  const [uploading, setUploading] = useState(false); // For showing upload state
  const [user] = useAuthState(auth); // Get the authenticated user
  const navigate = useRouter();
  const pathName = usePathname();

  const [ userProfilePic, setUserProfilePic ] = useState('./user.png');

  useEffect(() => {
    // Set user profile picture from Firebase Auth if available
    if (user && user.photoURL) {
      setUserProfilePic(user.photoURL);
    }
  }, [user]);

  // Function to handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      try {
        const imageRef = ref(storage, `user-images/${user.uid}/profile.jpg`);
        await uploadBytes(imageRef, file);
        const downloadURL = await getDownloadURL(imageRef);

        // Update user profile with the new image URL
        await updateProfile(user, { photoURL: downloadURL });
        setUserProfilePic(downloadURL); // Update the profile pic state
        setUploading(false);
        setPicState(false); // Close the upload box
      } catch (error) {
          setUploading(false);
      }
    }
  };

  return (
    <Fragment>
      <nav className="bg-[#121212] px-7 flex justify-between items-center h-[10vh]">
        <div className="h-[70px] w-[170px] flex items-center justify-center overflow-hidden">
          <img
            src="./Logo.png"
            className="cursor-pointer h-[200px] shadow"
            onClick={() => navigate.push("/")}
            alt="Logo"
          />
        </div>

        {/* Desktop navigation */}
        <ul className="md:flex hidden justify-between lg:w-[25%] md:w-[35%] Navbarr">
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

        {/* Conditional rendering for Login/Signup or Logout in desktop view */}
        <div className="md:block hidden">
          {user ? (
            <div className="flex gap-4 relative">
              <img
                src={userProfilePic}
                className="h-[30px] w-[30px] rounded-full cursor-pointer"
                alt="Profile"
                onClick={() => setPicState(!picState)}
              />
              <div
                className={`${
                  picState === true ? "block" : "hidden"
                } bg-[#121212] p-2 text-nowrap absolute text-[12px] rounded-xl top-[30px] -left-8 pt-9`}
              >
                <ImCancelCircle
                  onClick={() => setPicState(false)}
                  className="cursor-pointer absolute top-2 right-3"
                />
                <label className="cursor-pointer">
                  Upload Profile
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
                {uploading && <p>Uploading...</p>}
              </div>
              <button
                onClick={() => {
                  signOut(auth);
                  navigate.push("/");
                }}
                className="text-[#F05454] text-sm"
                type="button"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[#F5F5F5] mr-5 text-sm hover:text-[#F05454]"
              >
                Login
              </Link>
              <Link href="/signup" className="text-[#F05454] text-sm">
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="relative md:hidden block">
          <MdOutlineSegment
            className="md:hidden block cursor-pointer text-[#F5F5F5]"
            onClick={() => setNav(!nav)}
            aria-label="Toggle Navigation"
          />
          <div
            className={`${
              nav === false ? "hidden" : "block"
            } md:hidden  absolute z-20 -right-4 rounded-xl top-6 bg-[#111111ac] p-5 px-7`}
          >
            <ul className="Navbarr" onClick={() => setNav(false)}>
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

            {/* Conditional rendering for Login/Signup or Logout in mobile menu */}
            <div className="block" onClick={() => setNav(false)}>
              {user ? (
                <button
                  className="text-[#F05454] text-sm"
                  onClick={() => {
                    signOut(auth);
                    navigate.push("/");
                  }}
                  type="button"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-[#F5F5F5] mr-5 text-sm block py-2 hover:text-[#F05454]"
                  >
                    Login
                  </Link>
                  <Link href="/signup" className="text-[#F05454] text-sm">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
