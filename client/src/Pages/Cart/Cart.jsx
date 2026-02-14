import React from 'react'
import { assets, products } from '../../assets/assets'
import './Cart.css'

const Cart = () => {
  return (
    <div className='cart'>
      <div className="cart-products">
        <div className="cart-products-list">
          <div className="cart-item-title">
            <p>Image</p>
            <p>Title</p>
            <p>Price</p>
            <p>Discount</p>
            <p>Add</p>
            <p>Remove</p>
          </div>
          {products.sofa.map((item, index) => {
            return (
              <div key={index} className="cart-item">
                <img src={item.image} alt="" className="cart-item-img" />
                <p className="cart-item-name">{item.title}</p>
                <p className="cart-item-price">₹{item.price}</p>
                <p className="cart-item-price-discount">-{item.discount}%</p>
                <p className="cart-item-increment">
                  <img className='add-icon' src={assets.add_icon} alt="" />
                </p>
                <p className="cart-item-remove">
                  <img src={assets.cross_icon} alt="" className="remove-btn" />
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <div className="cart-total">
          <h1>Cart Total</h1>
          <ul className="cart-bill">
            <li className='cart-total-price'>
              <p>Cart Total:</p>
              <span>₹4550</span>
            </li>
            <li className='cart-total-discount'>
              <p>Discounts:</p>
              <span>-30%</span>
            </li>
            <hr className='section' />
            <li className='cart-total-bill'>
              <p>Total:</p>
              <span>₹3185</span>
            </li>
          </ul>
        </div>

        <div className='cart-discount-cuopon'>
          <h1 className='cart-discount-cuopon-head'>Enter Redeem Code here</h1>
          <div className='cart-discount-input'>
            <input type="text" placeholder='Redeem code' required />
            <button>Redeem</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
