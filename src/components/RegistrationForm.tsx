/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import router from 'next/router';

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    // Extract form data
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      passwordConfirm: form.passwordConfirm.value,
      agreedToTerms: form.agreedToTerms.checked,
    };

    // Send signup data to the backend API
    const response = axios.post('http://127.0.0.1:3000/api/v1/users/signup', formData)
      .then(() => {
        console.log(response)
        // localStorage.setItem("token", response.data.token);
        // Handle successful signup (e.g., show a success message)
        alert('Registration successful! You can now log in.');
        router.push('/');
      })
      .catch((err) => {
        // Handle signup error (e.g., show an error message)
        console.log(err);
        alert('An account with this email already exists. Please sign in.');
      });
  };


  return (
    <>
      <div className="lg:px-16 lg:py-2 px-6">
        <Navbar />
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10 w-1/2 ml-80" onSubmit={handleSubmit}>
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
              name="name"
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
              name="email"
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
              name="password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="passwordConfirm"
              type="password"
              placeholder="******************"
              name="passwordConfirm"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              className="mr-2 leading-tight"
              id="agreedToTerms"
              type="checkbox"
              name="agreedToTerms"
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
            <span className="text-gray-600 text-sm">Already have an account? </span>
            <a href="/login" className="text-blue-500 font-semibold hover:text-blue-600 cursor-pointer">
              Sign In
            </a>
          </div>

        </form>
      </div>
    </>
  );
};

export default RegisterForm;
