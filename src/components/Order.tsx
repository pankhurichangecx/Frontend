/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';

export default function Order() {
  const [secondsLeft, setSecondsLeft] = useState(10);

  useEffect(() => {
    // Redirect to the "" after 10 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = '/orderHistory'; 
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

// OrderHistory.js

// import React from 'react';
// import Navbar from './NavBar';
// import Chat from './Chat';
// import Icons from './SideIcons';

// const orderData = [
//   {
//     id: 1,
//     date: '2023-08-01',
//     product: 'Product A',
//     image: 'https://assets.bonkerscorner.com/uploads/2022/11/11125551/Bonkerscorner_black_pique_shirt01-1024x1536.jpg',
//     price: 29.99,
//     status: "Canceled"
//   },
//   {
//     id: 2,
//     date: '2023-08-02',
//     product: 'Product B',
//     image: 'https://assets.bonkerscorner.com/uploads/2022/11/11125551/Bonkerscorner_black_pique_shirt01-1024x1536.jpg',
//     price: 39.99,
//     status: "Processing"
//   },
//   // Add more sample data as needed
// ];

// const Order = () => {
//   return (
//     <>
//       <div className="lg:px-16 lg:py-7 px-6 py-2">
//         <Navbar />
//         <Icons />
//         <Chat />
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Order History</h1>
//       {orderData.map((order) => (
//         <div
//           key={order.id}
//           className="flex items-center border p-4 mb-4 rounded-md shadow-md"
//         >
//           <div className="w-16 h-16">   
//           {/* flex-shrink-0  */}
//             <img src={order.image} alt={order.product} className="w-full h-full rounded" />
//           </div>
//           <div className="ml-4">
//             <p className="text-lg font-semibold">{order.product}</p>
//             <p className="text-gray-600">Date: {order.date}</p>
//             <p className="text-gray-600">Price: ${order.price}</p>
//             <p className="text-gray-600">Price: {order.status}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     </div>
//     </>
//   );
// };

// export default Order;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Order = () => {
//   const [orderHistory, setOrderHistory] = useState([]);

//   useEffect(() => {
//     // Make the API request to fetch order history data
//     axios.get('http://127.0.0.1:3000/api/v1/orders/')
//       .then(response => {
//         setOrderHistory(response.data.data.orders);
//       })
//       .catch(error => {
//         console.error('Error fetching order history:', error);
//       });
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Order History</h1>
//       {orderHistory.map((order) => (
//         <div
//           key={order.id}
//           className="flex items-center border p-4 mb-4 rounded-md shadow-md"
//         >
//           <div className="flex-shrink-0 w-16 h-16">
//             <img src={order.photoUrl} alt={""} className="w-full h-full rounded" />
//           </div>
//           <div className="ml-4">
//             <p className="text-lg font-semibold">{order.product}</p>
//             <p className="text-gray-600">Date: {order.order_date}</p>
//             <p className="text-gray-600">Price: ${order.total_amount}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Order;

// OrderHistory.js

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Order = () => {
//   const [orderHistory, setOrderHistory] = useState([]);

//   useEffect(() => {
//     // Make the API request to fetch order history data
//     axios.get('http://127.0.0.1:3000/api/v1/orders/')
//       .then(response => {
//         setOrderHistory(response.data.data.orders);
//       })
//       .catch(error => {
//         console.error('Error fetching order history:', error);
//       });
//   }, []);

//   const [expandedOrderIds, setExpandedOrderIds] = useState([]);

//   const toggleExpandOrder = (orderId) => {
//     setExpandedOrderIds(prevIds => {
//       if (prevIds.includes(orderId)) {
//         return prevIds.filter(id => id !== orderId);
//       } else {
//         return [...prevIds, orderId];
//       }
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Order History</h1>
//       {orderHistory.map((order) => (
//         <div
//           key={order.id}
//           className="border p-4 mb-4 rounded-md shadow-md"
//         >
//           <div
//             className="cursor-pointer flex justify-between items-center"
//             onClick={() => toggleExpandOrder(order.id)}
//           >
//             <h2 className="text-lg font-semibold">Order ID: {order.id}</h2>
//             <span>{expandedOrderIds.includes(order.id) ? '-' : '+'}</span>
//           </div>
//           {expandedOrderIds.includes(order.id) && (
//             <div className="mt-4">
//               {order.products.map((product) => (
//                 <div
//                   key={product.id}
//                   className="flex items-center border p-2 mb-2 rounded"
//                 >
//                   <div className="w-16 h-16">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full rounded"
//                     />
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-lg font-semibold">{product.name}</p>
//                     <p className="text-gray-600">Price: ${product.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Order;


// // ADMIN //

