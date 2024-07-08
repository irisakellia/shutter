import React ,{useState}from 'react'
import like from '../assets/like'

const Like = () => {


return (
    <div>
      <video 
      source
      src={like}/>
      <p>Like something you see ? </p>
      <p className='text-xs'>Save any asset and find it later in catalog</p>
    </div>
  )
}

export default Like
