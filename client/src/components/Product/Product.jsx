import React from 'react'
import './Product.css'
import { products } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className='product'>
      <div className="product-head">
        <i className='bx bx-chevron-left'></i>
        <p onClick={() => navigate('/products')}>Back</p>
      </div>

      {products.sofa.map((item, index) => (
        <div className="product-container" key={index}>
          <div className="product-image">
            <img src={item.image} alt={item.name} />
          </div>

          <div className="prodcut-details">
            <div className="item-category">
              <p>{item.category}</p>
            </div>
            <h3 className='item-name'>{item.title}</h3>
            <p className='item-price'>₹{item.price}</p>
            <div className="product-ratings">
              <p>{item.ratings}</p>
              <ul>
                <li className='bx bx-star'></li>
                <li className='bx bx-star'></li>
                <li className='bx bx-star'></li>
                <li className='bx bx-star'></li>
                <li className='bx bx-star'></li>
              </ul>
            </div>
            <p className='item-description'>{item.description}</p>
            <div>
              <button className='add-to-cart-btn' onClick={() => navigate('/cart')}>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Product
