import React from 'react'
import { assests } from '../assets/assets'
import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios'

const AddItem = ({ url }) => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    discount:"",
    price: "",
    category: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("discount", data.discount);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/product/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        discount:"",
        category: "",
      })
      setImage(false);
      toast.success(response.data.message);
    }
    else {
      toast.error(response.data.message);
    }
  }
  return (
    <div>
      <div>
        <form onSubmit={onSubmitHandler} className='flex items-start flex-col gap-5 pl-10 pt-9'>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Upload Image</p>
            <label htmlFor="image">
              <img className='cursor-pointer w-36' src={image ? URL.createObjectURL(image) : assests.upload_img} alt="" />
            </label>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' className='cursor-pointer hidden' />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Product Name</p>
            <input onChange={onChangeHandler} name='name' value={data.name} type="text" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Description(optional)</p>
            <input onChange={onChangeHandler} name='description' value={data.description} type="text" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Discount</p>
            <input onChange={onChangeHandler} name='discount' value={data.discount} type="text" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Price</p>
            <input onChange={onChangeHandler} name='price' value={data.price} type="number" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
          </div>
          <div>
            <p className='text-[15px] font-semibold pl-1.5 mb-2'>Category</p>
            <input onChange={onChangeHandler} name='category' value={data.category} type="text" placeholder='Type here..' className='border border-gray-600/40 rounded-[10px] h-10 w-2xs pl-2.5' />
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
