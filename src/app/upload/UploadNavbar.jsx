import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { Fragment, useEffect, useState } from "react";
import { MdOutlineSegment } from "react-icons/md";
import { MdCancelPresentation } from "react-icons/md";
import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, onValue } from "firebase/database"; // Import Realtime Database methods

function Navbar() {
  const [userProfilePic, setUserProfilePic] = useState('./user.png');
  let navigate = useRouter();
  const [nav, setNav] = useState(false);
  const [user] = useAuthState(auth);
  const [randomName, setRandomName] = useState('');
  const [credits, setCredits] = useState(0); // State to store credits

  useEffect(() => {
    // Set user profile picture from Firebase Auth if available
    if (user && user.photoURL) {
      setUserProfilePic(user.photoURL);
    }

    // Fetch user credits from Realtime Database
    if (user) {
      const db = getDatabase(); // Initialize Firebase Realtime Database
      const creditsRef = ref(db, `users/${user.uid}/credits`); // Reference to user's credits
      onValue(creditsRef, (snapshot) => {
        const data = snapshot.val();
        setCredits(data || 0); // Update state with the fetched credits or 0 if none exists
      });
    }

  }, [user]);

  return (
    <Fragment>
      <nav className="bg-[#121212] px-7 flex justify-between items-center h-[10vh] relative">
        <div className="h-[70px] w-[170px] flex items-center justify-center overflow-hidden">
          <img
            src="./Logo.png"
            className="cursor-pointer h-[200px] shadow"
            onClick={() => navigate.push("/")}
            alt=""
          />
        </div>
        <div className="sm:flex items-center hidden">
          <img src={userProfilePic} className="h-[30px] w-[30px] rounded-full" alt="" />
          <p className="ms-3 text-[14px]">{user?.displayName || randomName}</p>
          <div className="GradientBG2 rounded-full px-4 py-1 ms-5 text-[#000000] text-[13px] font-medium">
            {credits} Credits
          </div>
        </div>

        <div className="relative sm:hidden block">
          <MdOutlineSegment
            className="sm:hidden block cursor-pointer text-[#F5F5F5]"
            onClick={() => setNav(!nav)}
          />
          <div
            className={`w-[20vw] absolute py-5 rounded-xl flex flex-col items-center  top-10 -right-5 bg-[#00000053] ${
              nav === true ? "block sm:hidden" : "hidden"
            }`}
          >
            <MdCancelPresentation className="absolute right-2" onClick={() => setNav(false)} />
            <img src={userProfilePic} className="h-[30px] w-[30px] rounded-full mt-7 block mx-auto" alt="" />
            <p className="text-[14px] mt-2">{user?.displayName || randomName}</p>
            <div className="GradientBG2 rounded-full mt-8 px-4 py-1 text-[#000000] text-[13px] font-medium">
              {credits} Credits
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
