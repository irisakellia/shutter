import React from 'react';
import { Link } from 'react-router-dom';

const Interest = () => {
  return (
    <div className='mt-10 ml-20 mb-6'>
      <p>
        If you want to view our <span className='text-red-600'>gallery</span>, you can
        <span className='text-red-600'> signUp </span> or <span className='text-red-600'><Link to={"/login"}>LogIn </Link>  </span>
          
           
          
        to see for yourself.
      </p>
    </div>
  );
};

export default Interest;
