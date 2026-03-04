import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItems, getTotalcartAmt, addTocart, removeFromcart, productsList, url } = useContext(StoreContext);
  const navigate = useNavigate();
  const onSubmit = () => {
    if (Object.keys(cartItems).length === 0) {
      alert("Your cart is empty.");
    }
  }

  const getDiscount = () => {
    let discounts = [];
    let discountValue = 0;
    Object.keys(cartItems).map((itemId) => {
      const itemInfo = productsList.find(p => p._id === itemId);
      if (itemInfo) {
        discounts.push(Number(itemInfo.discount));
      }
    })
    for (let i = 0; i < discounts.length; i++) {
      discountValue += (discounts[i] / discounts.length)
    }
    return discountValue;
  }

  return (
    <div className='cart'>
      <div className="cart-products">
        {Object.keys(cartItems).length > 0
          ? <div>
            <div className="cart-item-title">
              <p>Image</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Discount</p>
              <p>Add</p>
              <p>Remove</p>
            </div>

            <div className="cart-products-list">
              <div className="cart-item">
                {Object.keys(cartItems).map((itemId) => {
                  const qty = cartItems[itemId];
                  const itemInfo = productsList.find((p) => p._id === itemId);
                  return qty > 0 && itemInfo ? (
                    <div key={itemId} className="cart-item-row">
                      <img className='cart-item-img' src={`${url}/images/${itemInfo.image}`} alt="" />
                      <p>{itemInfo.name}</p>
                      <span>₹{itemInfo.price}</span>
                      <p className='cart-item-quantity'>{qty}</p>
                      <p className='cart-item-discount'>-{itemInfo.discount}%</p>
                      <img onClick={() => addTocart(Number(itemId))} src={assets.add_icon_green} className='add-btn' alt="" />
                      <img onClick={() => removeFromcart(Number(itemId))} src={assets.remove_icon_red} className='remove-btn' alt="" />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div> : <div className='empty'>
            <p>Your cart is empty</p>
            <button onClick={() => navigate("/products")}>Rent Now</button>
          </div>}
      </div>

      <div>
        <div className='cart-discount-cuopon'>
          <h1 className='cart-discount-cuopon-head'>Enter Redeem Code here</h1>
          <div className='cart-discount-input'>
            <input type="text" placeholder='Redeem code' required />
            <button>Redeem</button>
          </div>
        </div>

        <div className="cart-total">
          <h1>Cart Total</h1>
          <ul className="cart-bill">
            <li className='cart-total-price'>
              <p>Cart Total:</p>
              <span>₹{getTotalcartAmt()}</span>
            </li>
            <li className='cart-total-discount'>
              <p>Discounts:</p>
              <span>-{getDiscount() === 0 ? 0 : getDiscount()}%</span>
            </li>
            <hr className='section' />
            <li className='cart-total-bill'>
              <p>Total:</p>
              <span>₹{getTotalcartAmt() * (getDiscount() / 100)}</span>
            </li>
          </ul>

          <button onClick={() => {
            onSubmit();
          }} className='cart-rent-btn'>Rent Now</button>
        </div>


      </div>

    </div>
  )
}

export default Cart
