import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { assests } from '../assets/assets';

const ProductsList = ({ url }) => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${url}/api/product/list`);
      if (response.data.success) {
        setProductsList(response.data.data);
        setError(null);
      } else {
        setError(response.data.message);
        console.log(response.data.message);
      }
    } catch (err) {
      setError('Failed to fetch products');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  
  if (loading) {
    return <div className="text-center py-10 text-gray-500">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  if (productsList.length === 0) {
    return <div className="w-full h-full text-center text-3xl font-semibold py-10 text-gray-500">No products found</div>;
  }

  return (
    <div className="w-[60vw] p-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Products List</h2>
      <div className="flex flex-col divide-y bg-white rounded-md">
        {productsList.map((item, index) => {
          return (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center p-4 gap-4">
              <div className="relative w-full sm:w-28 h-44 sm:h-28 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                {item.discount && (
                  <div className="absolute top-2 right-2 bg-[#55aff8] text-white px-2 py-0.5 rounded-md text-xs font-semibold">
                    {item.discount}% OFF
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                {item.category && (
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {item.category}
                  </p>
                )}

                <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                  {item.name}
                </h3>

                {item.discription && (
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                    {item.discription}
                  </p>
                )}

                <p className="text-base font-bold text-gray-900">₹{item.price}</p>
              </div>

              <div className="w-full sm:w-auto flex justify-end sm:justify-start sm:flex-col items-end sm:items-end gap-2 mt-3 sm:mt-0">
                <button className="bg-red-500 w-full sm:w-auto hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-md transition-colors duration-300 text-sm">
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default ProductsList
