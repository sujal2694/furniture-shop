import React from 'react'
import { assests } from '../assets/assets'

const OrderList = () => {
  return (
    <div className='flex items-center justify-start flex-col gap-10 w-full h-full pt-10'>
      <h1 className='text-2xl font-semibold text-gray-600'>Order List</h1>
      <div className='p-5 border border-gray-400/30 rounded-sm'>
        <div className='grid grid-cols-5 w-[60vw]'>
          <img className='col-span-1' src={assests.parcel_icon} alt="" />
          <p className='col-span-2 flex items-center'>item name</p>
          <p className='flex items-center'>total price</p>
          <div className='flex items-center justify-center'>
            <button className='bg-blue-500/90 h-10 text-sm text-white py-2 px-3 rounded-sm cursor-pointer'>View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderList
