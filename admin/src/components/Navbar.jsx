import React from 'react'
import { assests } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 px-5 lg:w-[85vw] m-auto border-b border-gray-400/30'>
      <h1 className='text-4xl'>Shop</h1>
      <div>
        <img src={assests.profile_icon} alt="" />
      </div>
    </div>
  )
}

export default Navbar
