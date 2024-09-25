"use client"

import { useRouter } from "next/navigation";

const CheckoutButton = ({ amount }) => {
    const location = useRouter()
    const handleCheckout = async () => {
      const response = await fetch('/api/example', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
  
      const session = await response.json();

    //   console.log(session)
  
      // Redirect to the Stripe Checkout page
      if (session.url) {
        window.location.href = session.url;
      } else {
        // console.error('Failed to redirect to checkout:', session.error);
        location.push('/payment')
      }
    };
  
    return (
      <button onClick={handleCheckout} className="block mx-auto py-2 w-full  rounded-lg mt-12 bg-[#323232] font-bold">
        Buy now
      </button>
    );
  };
  
  export default CheckoutButton;
  