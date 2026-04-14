import React from 'react'
import { assests } from '../assets/assets'

const Navbar = ({ setToken }) => {

  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
  }
  return (
    <div className='flex items-center justify-between py-5 px-5 lg:w-[85vw] m-auto border-b border-gray-400/30'>
      <img className='w-40' src={assests.logo} alt="" />
      <div className='relative'>
        <div className='group'>
          <img src={assests.profile_icon} alt="" />
          <div className='hover-page w-32 text-center text-sm tracking-wide absolute top-full right-1/2 bg-white shadow-md py-3 px-5 cursor-pointer'>
            <i className='bx bx-arrow-out-right-square-half'></i>
            <p onClick={logOut}>Log Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
