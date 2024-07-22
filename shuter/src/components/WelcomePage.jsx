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
    
        <button className='float-right' onClick={handleLogout}>
          Log out
        </button>
      
    </div>
  );
};

export default WelcomePage;
