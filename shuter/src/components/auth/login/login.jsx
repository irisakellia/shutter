import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const Form = () => {
const navigate = useNavigate();

  const[data,setData] = useState({
    email:'',
    password:'',
  })

const handleMyInputsBabe = (event)=>{
  const {name , value} = event.target ;
  setData({
    ...data ,
    [name]:value,
  });


};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const result = await fetch("http://localhost:4001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await result.json();
    console.log(response);
    navigate('/');

  } catch (error) {
    console.error(error.message);
  }
};




  return (
    <div className='flex flex-col items-center p-4'>
      <p className='text-2xl mb-4'>Hello!</p>
      <p className='text-xl mb-6'>Welcome Back to <span className='text-red-600 font-medium'>Shutter </span></p>
      <div className='flex flex-col items-center w-full max-w-xs'>
        <button className='mb-4 bg-gradient-to-b from-blue-200 via-red-600 to-red-800 py-2 px-4 rounded'>Sign in with Google</button>
        <div className='w-full h-px bg-gray-400 mb-4'></div>
        <div className='text-lg mb-4'>or Sign in with <span className='text-red-600'>Email</span></div>
        <div className='w-full h-px bg-gray-400 mb-4'></div>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-full max-w-xs'>    
      <input type='email' placeholder='kellia' id='email' name='email' className='w-full p-2 mb-4 border border-gray-300 rounded'
      value={data.email}
      onChange={handleMyInputsBabe}


      />    
        <label htmlFor='Password' className='w-full text-left mb-2 text-red-600'></label>
        <input type='password' placeholder='****' id='password' className='w-full p-2 mb-4 border border-gray-300 rounded' 
        value={data.password}
        onChange={handleMyInputsBabe}
        />
     
  
      <button className=' bg-gradient-to-b from-blue-200 via-red-600 to-red-800 text-white py-2 px-4 rounded mb-4'><Link to={"/home"}>Login</Link></button>
    
    
      </form>
      <p className=' mb-4 cursor-pointer'>Forgot password?</p>
      <p className=' cursor-pointer'>Not registered yet? Create an Account</p>
      </div>
  )
}

export default Form

