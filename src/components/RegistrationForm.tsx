import React, { useState } from 'react';
import LoginForm from './LoginForm';

const RegisterForm = ({onToggleForm}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here, e.g., call an API to create a new user
    console.log('Registered with:', {
      name,
      email,
      password,
      phoneNumber,
      address,
      agreedToTerms,
    });
  };

  const handleSignIn = () => {
    // Call the parent component function to switch to the login form
    
    onToggleForm();
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold">Create an Account</h2>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          placeholder="******************"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          placeholder="Address"
          rows="3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="mb-4 flex items-center">
        <input
          className="mr-2 leading-tight"
          id="agreedToTerms"
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          required
        />
        <label className="text-gray-700 text-sm" htmlFor="agreedToTerms">
          I agree to the{' '}
          <span className="text-blue-500 underline cursor-pointer">Terms and Conditions</span>
        </label>
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Register
        </button>
      </div>

      {/* Button to indicate existing account */}
      <div className="text-center mt-4">
      <span className="text-gray-600 text-sm">Already have an acocunt? </span>
      <button
          className="text-blue-500 font-semibold hover:text-blue-600 cursor-pointer"
          onClick={handleSignIn}
        >
           Sign In
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
