import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

export default function Order() {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    // Redirect to the homepage after 10 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = '/'; 
    }, secondsLeft * 1000);

    // Update the secondsLeft state every second
    const countdownInterval = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timers when the component unmounts
    return () => {
      clearTimeout(redirectTimer);
      clearInterval(countdownInterval);
    };
  }, [secondsLeft]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Navbar />
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center text-orange-500">
          Thank You for Your Order!
        </h1>
        <p className="text-lg text-center text-gray-700">
          Your order has been successfully placed.
        </p>
        <div className="w-full h-1 bg-yellow-300 mt-4 relative">
          <div
            className="h-full bg-red-600"
            style={{
              width: `${(secondsLeft / 10) * 100}%`,
              transition: `width ${secondsLeft}s linear`
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
