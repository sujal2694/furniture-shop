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
    return <div className="text-center py-10 text-gray-500">No products found</div>;
  }

  return (
    <div className="w-full p-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Products List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsList.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-52 bg-gray-200 overflow-hidden">
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                {item.discount && (
                  <div className="absolute top-2 right-2 bg-[#55aff8] text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {item.discount}% OFF
                  </div>
                )}
              </div>

              <div className="p-4 relative">
                {/* Category */}
                {item.category && (
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                    {item.category}
                  </p>
                )}

                <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {item.name}
                </h3>

                {item.discription && (
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.discription}
                  </p>
                )}

                <div className="flex items-center justify-between mt-4 mb-12">
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{item.price}
                  </p>
                </div>

                <button className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-md transition-colors duration-300 text-sm cursor-pointer">
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
