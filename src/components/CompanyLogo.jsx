import React from 'react'
import { companyLogos } from '../constants'

const CompanyLogo = ({className}) => {
  return (
    <div className={className}>
      <h5 className='text-center mb-6 tagline text-n-1'>Helping people creating beutiful content at</h5>
      <ul className='flex justify-between '>
        {
            companyLogos.map((items,index)=>(
                <li key={index} className='m-15'>
                    <img src={items} alt="" width={134} height={28} />
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default CompanyLogo
