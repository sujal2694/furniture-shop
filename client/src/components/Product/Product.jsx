import React from 'react'
import './Product.css'
import { products } from '../../assets/assets'

const Product = () => {
  return (
    <div className='product'>
      <div className="product-head">
        <i className='bx bx-chevron-left'></i>
        <p>Back</p>
      </div>

      {products.sofa.map((item, index) => (
        <div className="product-container" key={index}>
          <div className="product-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="product-name">
            <h3>{item.name}</h3>
          </div>
          <div className="product-price">
            <p>{item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Product
