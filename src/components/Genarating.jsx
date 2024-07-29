import React from 'react'
import { loading } from '../assets'
const Genarating = ({className}) => {
  return (
    <div className={`flex items-center h-[3.5rem] w-3/4 px-6 bg-n-8/80 rounded-[1.7rem] ${className || " "} text-base`}>
        <img className="w-5 h-5 mr-4" src={loading} alt="laoding..." />
        AI is Genarating
      
    </div>
  )
}

export default Genarating
