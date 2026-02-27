import React from 'react'
import { assests } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex items-end gap-5 flex-col border-r border-gray-700/30 lg:w-[15vw] w-[30vw] pt-8'>
      <div onClick={()=>navigate("/add")} className='flex items-center justify-center gap-2.5 border-2 border-gray-900/40 px-8 py-3 rounded-[10px_0_0_10px] hover:border-blue-500/60 hover:bg-blue-400/10 border-r-0 cursor-pointer'>
        <img src={assests.add_icon} alt="" />
        <p>Add Item</p>
      </div>
      <div onClick={()=>navigate("/productsList")} className='flex items-center justify-center gap-2.5 border-2 border-gray-900/40 px-8 py-3 rounded-[10px_0_0_10px] hover:border-blue-500/60 hover:bg-blue-400/10 border-r-0 cursor-pointer'>
        <img src={assests.order_icon} alt="" />
        <p>Items List</p>
      </div>
      <div onClick={()=>navigate("/orders")} className='flex items-center justify-center gap-2.5 border-2 border-gray-900/40 px-8 py-3 rounded-[10px_0_0_10px] hover:border-blue-500/60 hover:bg-blue-400/10 border-r-0 cursor-pointer'>
        <img src={assests.order_icon} alt="" />
        <p>Order List</p>
      </div>
    </div>
  )
}

export default Sidebar
