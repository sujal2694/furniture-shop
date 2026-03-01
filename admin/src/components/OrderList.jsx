import React from 'react'
import { assests } from '../assets/assets'

const OrderList = () => {
  return (
    <div className='flex items-center justify-start flex-col gap-10 w-full h-full pt-10'>
      <h1 className='text-2xl font-semibold text-gray-600'>Order List</h1>
      <div className='p-5 border border-gray-400/30 rounded-sm'>
        <div className='flex items-center justify-between w-[60vw]'>
          <img src={assests.parcel_icon} alt="" />
          <p>item name</p>
          <p>total price</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  )
}

export default OrderList
