import React from 'react';
import Navbar from './NavBar';

const UpdatePasswordForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    // Add your password update logic here, e.g., send data to your API
    // You can use axios or any other method you prefer

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password don't match");
    } else {
      alert('Password updated successfully');
      // Optionally, you can redirect the user to a different page after updating the password
    }
  };

  return (
    <div className="lg:px-16 lg:py-2 px-6">
      <Navbar />
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 w-1/2 ml-80" onSubmit={handleSubmit}>
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold">Update Password</h2>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
            Current Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="currentPassword"
            type="password"
            placeholder="Current Password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            New Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newPassword"
            type="password"
            placeholder="New Password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePasswordForm;
