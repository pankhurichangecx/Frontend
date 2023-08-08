// import React from 'react';
// import Navbar from './NavBar';

// const UpdatePasswordForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const currentPassword = e.target.currentPassword.value;
//     const newPassword = e.target.newPassword.value;
//     const confirmPassword = e.target.confirmPassword.value;

//     // Add your password update logic here, e.g., send data to your API
//     // You can use axios or any other method you prefer

//     if (newPassword !== confirmPassword) {
//       alert("New password and confirm password don't match");
//     } else {
//       alert('Password updated successfully');
//       // Optionally, you can redirect the user to a different page after updating the password
//     }
//   };

//   return (
//     <div className="lg:px-16 lg:py-2 px-6">
//       <Navbar />
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 w-1/2 ml-80" onSubmit={handleSubmit}>
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-semibold">Update Password</h2>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
//             Current Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="currentPassword"
//             type="password"
//             placeholder="Current Password"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
//             New Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="newPassword"
//             type="password"
//             placeholder="New Password"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
//             Confirm Password
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="confirmPassword"
//             type="password"
//             placeholder="Confirm Password"
//             required
//           />
//         </div>
//         <div className="flex items-center justify-center mt-6">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Update Password
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UpdatePasswordForm;

import React from 'react';

const UserDetails = () => {
  const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main St, City, Country',
    phoneNumber: '123-456-7890',
  };

  return (
    <div className="bg-white p-8 shadow-md rounded-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">User Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 mb-1">Name:</p>
          <p className="font-semibold">{user.name}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Email:</p>
          <p className="font-semibold">{user.email}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Address:</p>
          <p className="font-semibold">{user.address}</p>
        </div>
        <div>
          <p className="text-gray-600 mb-1">Phone Number:</p>
          <p className="font-semibold">{user.phoneNumber}</p>
        </div>
      </div>
      <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
        Edit Profile
      </button>
    </div>
  );
};

export default UserDetails;

