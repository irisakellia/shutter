import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <p>Welcome to Shutter! Come view our gallery.</p>

      <p className='text-black text-lg mt-10'>
        Our photography
        <button className='bg-red-600 p-2 py-2 rounded-xl text-white text-sm ml-10'>
          View Gallery
        </button>
        <button className='float-right' onClick={handleLogout}>
          Logout
        </button>
      </p>
    </div>
  );
};

export default WelcomePage;
