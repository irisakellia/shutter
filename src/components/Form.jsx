import React from 'react'
import { FaImage, FaCameraRetro,FaSearch } from 'react-icons/fa'

const Form = () => {
  return (
    <div>
      <form>
        <button className='inline-flex items-center border border-black ml-40 mt-10 rounded-sm p-2 py-2'>
          <FaImage className='ml-2'/> <p className='ml-2 mr-2  mt-2 text-xs text-black text-opacity-75'>All images</p>
        </button>
        <input type='text' placeholder='Search for images' className='border border-black w-96 p-2 py-2 rounded' 
        
        /> <div className='inline-flex  border border-red-500 bg-red-500 h-10 w-10 rounded-sm ml-0'><FaSearch className='inline-flex mt-2 ml-2'/></div>
        <button className='inline-flex items-center border border-black ml-4 mt-10 rounded-xl p-2 py-2'>
          <FaCameraRetro className='ml-2'/> <p className='text-sm ml-2'>Search by Image</p>
        </button>
      </form>
      <div>
        <button className='bg-red-500 ml-[450px] p-4 py-2 rounded-2xl text-sm  mt-10 font-medium text-white'>Buy 2 Image Pack</button>
      </div>
    </div>

  )
}

export default Form
