import React from 'react'

const Heading = ({className , title}) => {
  return (
    <div
    className={`${className} max-w-[45rem] mx-auto mb-12 text-center lg:mb-20`}>
      {title && <h2 className='h2'>{title}</h2>}
    </div>
  )
}

export default Heading
