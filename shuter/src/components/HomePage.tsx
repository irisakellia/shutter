import Title from "./Title";
import Get from "./Get";
import Interest from "./Interest";
import Make from "./Make";
import Need from "./Need";
import Navbar from "./Navbar"

import React from 'react'

const HomePage = () => {
  return (
    <div>
         <Title />
      <Navbar />
      <Get />
      <Make />
      <Need/>
      <Interest/>
    </div>
  )
}

export default HomePage
