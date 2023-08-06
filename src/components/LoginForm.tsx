import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import the router from Next.js
import Navbar from './NavBar';

const LoginForm = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Send login data to the backend API
      const response = await axios.post('http://127.0.0.1:3000/api/v1/users/login', {
        email,
        password,
      });

      // Display success alert
      alert('Login successful');
      // Store the token in local storage after successful login
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      // Redirect to the homepage
      router.push('/'); // Replace '/' with the actual path to your homepage
    } catch (error) {
      // Handle login error (e.g., show an error message)
      const errorElement = document.getElementById('error');
      errorElement.textContent = 'Incorrect email or password';
      errorElement.style.display = 'block';
    }
  };

  return (
    <>
      <div className="lg:px-16 lg:py-2 px-6">
        <Navbar />
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 ml-96 mt-20" onSubmit={handleSubmit}>
          <div className="text-center mb-6">
            <h2 className="text-3xl font-semibold">Sign In</h2>
          </div>
          <div id="error" className="mb-4 text-red-700 font-bold" style={{ display: 'none' }}></div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
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
              placeholder="******"
              required
            />
          </div>
          <div className="mb-4">
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="text-center mt-6">
            <span className="text-gray-600 text-sm">Don't have an account? </span>
            <a
              href="/register"
              className="text-blue-500 font-semibold hover:text-blue-600 cursor-pointer"
            >
              Create one
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
