import React from 'react'
import {    FaImages,
    FaVideo,
    FaNewspaper,
    FaWaveSquare,
    FaTable,
    FaMicrochip,
FaMusic} from 'react-icons/fa';


const Get = () => {
  return (
    <div>
    <div className='mt-4 ml-60 text-3xl font-medium mb-4'>
      <p>Get as many images as you need-no more, no less .</p>
      


    </div>
    
  <section className='inline-flex ml-40'>
 <div className='inline-flex hover:text-red-500 '>
<FaImages className='mt-2'/><p className='ml-2 mt-2 text-xs'>Images</p>
</div>
<div className='inline-flex ml-10 hover:text-red-500'>
<FaNewspaper className='mt-2 ml-10'/><p className='ml-2 mt-2 text-xs'>Editorial</p>
</div>
<div className='inline-flex ml-10 hover:text-red-500'>
<FaMusic className='mt-2 ml-10'/><p className='ml-2 mt-2 text-xs'>Music</p>
</div>
<div className='inline-flex ml-10 hover:text-red-500'>
<FaVideo className='mt-2 ml-10'/><p className='ml-2 mt-2 text-xs'>Video</p>
</div>
<div className='inline-flex ml-10 hover:text-red-500'>
<FaWaveSquare className='mt-2 ml-10'/><p className='ml-2 mt-2 text-xs'>Sound Effect</p>
</div>
<div className='inline-flex ml-10 hover:text-red-500'>
<FaTable className='mt-2 ml-10'/><p className='ml-2 mt-2 text-xs'>Templates</p>
</div>
<div className='inline-flex ml-10 hover:text-red-500'>
<FaMicrochip className='mt-2 ml-10'/><p className='ml-2 mt-2 text-xs'>Ai generator</p>
</div>



      </section>

    </div>
  )
}

export default Get
