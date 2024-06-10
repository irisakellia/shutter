import React from 'react'
import image from '../assets/image.png'
import help from '../assets/help.png'
import lines from '../assets/lines.png'
import global from '../assets/global.png'

const Make = () => {
  return (
    <div className='bg-blue-50 mt-4 mb-4'>
      <h1 className='text-xl font-medium ml-80 mt-8 pt-4 '>How Shutterstock makes it easy to elevate your brand</h1>
      <section className='grid grid-cols-4 ml-20 mt-8 mb-4 pb-2'>
      <div className='ml-34'>
<img src={image} alt='image' className='w-14 h-14'/>
<p className='font-medium font-sm'>450 million+ images</p>
<p className='ml-4 text-xs text-black text-opacity-70'>200,000 new images</p>
<p className='ml-4 text-xs text-black text-opacity-70'>added every day.</p>
      </div>
      <div>
        <img src={global} alt='global' className='w-14 h-14'/>
        <p className='font-medium font-sm'>Diverse content</p>
        <p className='ml-4 text-xs text-black text-opacity-70'>Exclusive collections from</p>
        <p className='ml-4 text-xs text-black text-opacity-70'>1 million+ contributors .</p>
      </div>
      
     
      <div>
        <img src={help} alt='global'  className='w-14 h-14'/>
        <p className='font-medium font-sm'>Flexible pricing</p>
        <p className='ml-4 text-xs text-black text-opacity-70'>Choice of on-demand</p>
        <p className='ml-4 text-xs text-black text-opacity-70'>packs or subscriptions</p>
      </div>
      <div>
        <img src={lines} alt='global'  className='w-14 h-14'/>
        <p className='font-medium font-sm'>Worry-free licensing</p>
        <p className='ml-4 text-xs text-black text-opacity-70'>Generous usage rights and</p>
        <p className='ml-4 text-xs text-black text-opacity-70 '>legal protection</p>
      </div>
      </section>
    </div>
  )
}

export default Make
