import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config"; 

const CheckoutButton = ({ amount }) => {
  const [user, loading] = useAuthState(auth); 
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>; 
  }

  const handleCheckout = async () => {
    if (!user) {
      router.push('/login'); 
      return;
    }

    const response = await fetch('/api/example', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, uid: user.uid }), 
    });

    const session = await response.json();

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
