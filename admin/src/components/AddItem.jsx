import React from 'react'
import { assests } from '../assets/assets'

const AddItem = () => {
  return (
    <div>
      <div>
        <form className='flex items-start flex-col gap-5 pl-10 pt-9'>
          <div>
            <label htmlFor="image"></label>
            <input type="image" id='image' className='hidden' />
            <img src={assests.upload_img} alt="" />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Product Name</p>
            <input type="text" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Description</p>
            <input type="text" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Price</p>
            <input type="text" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
          </div>
          <div className='flex items-center gap-10'>
            <div>
              <p className='text-[15px] font-semibold pl-1.5 mb-2'>Category</p>
              <select className='border border-gray-600/40 rounded-[10px] h-10 w-40 pl-2.5'>
                <option value="select">select</option>
                <option value="sofa">Sofa</option>
                <option value="refrigerator">Refrigerator</option>
                <option value="microwave">Microwave</option>
                <option value="ac">AC</option>
              </select>
            </div>
            <div>
              <p className='text-[15px] font-semibold pl-1.5 mb-2'>Date</p>
              <input type="date" className='border border-gray-600/40 rounded-[10px] h-10 pl-2.5' />
            </div>
          </div>
          <div>
            <button type='submit' className='w-32 bg-gray-900 text-white rounded-[10px] py-2 border-none'>Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddItem
