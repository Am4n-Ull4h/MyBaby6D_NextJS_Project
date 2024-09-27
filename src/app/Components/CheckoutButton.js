// /components/CheckoutButton.js

"use client";

import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config"; // Adjust the path based on your project structure



const CheckoutButton = ({ amount }) => {
  const { user } = useAuthState(auth);  // Assuming Firebase authentication
  const router = useRouter();

  const handleCheckout = async () => {
    const response = await fetch('/api/example', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, uid: user?.uid }),  // Send UID
    });

    const session = await response.json();

    // Redirect to the Stripe Checkout page
    if (session.url) {
      window.location.href = session.url;
    } else {
      router.push('/payment');
    }
  };

  return (
    <button onClick={handleCheckout} className="block mx-auto py-2 w-full rounded-lg mt-12 bg-[#323232] font-bold">
      Buy now
    </button>
  );
};

export default CheckoutButton;
