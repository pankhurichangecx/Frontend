import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegistrationForm';
import Navbar from './NavBar';

const App = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
    <div className="lg:px-16 lg:py-2 px-6">
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        {showLogin ? <LoginForm onToggleForm={toggleForm} /> : <RegisterForm onToggleForm={toggleForm} />}
      </div>
    </div>
    </div>
    </>
  );
};

export default App;
