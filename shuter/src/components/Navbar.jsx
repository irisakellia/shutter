import React from 'react'
import logo from '../assets/logo.png'
import { FaGlobe, FaHeart, FaShoppingCart, FaUserCircle , FaCheck} from 'react-icons/fa';


const Title = () => {
  return (
    <nav className='inline-flex mt-4'>

<img src={logo} alt='logo' className='h-8 w-50' />
<p className='ml-10 text-xs text-black text-opacity-60 mt-2'>Images</p>
<p className='text-xs ml-6 text-black text-opacity-60 mt-2'>Video</p>
<p className='text-xs ml-6 text-black text-opacity-60 mt-2'>Browse Content</p>
<p className='text-xs ml-6 text-black text-opacity-60 mt-2'>Enterprise</p>

<div className='ml-96 inline-flex'>
    <p className='text-xs text-black text-opacity-60 mt-2'>0 credits Available</p>
    <p className='text-xs text-black text-opacity-60 mt-2 ml-6'>pricing</p>
<FaGlobe className='mt-2 ml-20 text-black text-opacity-50'/>
<FaHeart className='mt-2 ml-4 text-black text-opacity-50 hover: pa' />
<FaShoppingCart className='mt-2 ml-4 text-black text-opacity-50'/>
<FaUserCircle className='mt-2 ml-4 text-black text-opacity-50'/>   
</div>
      
    </nav>
  )
}

export default Title
