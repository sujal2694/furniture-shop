import React, { useContext } from 'react'
import { assets, products } from '../../assets/assets'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItems } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-products">
        <div className="cart-products-list">
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
              {Object.keys(cartItems).length > 0 ? (
                Object.keys(cartItems).map((itemId) => {
                  const qty = cartItems[itemId];
                  let itemInfo = null;
                  for (const catArr of Object.values(products)) {
                    itemInfo = catArr.find((p) => p._id === Number(itemId));
                    if (itemInfo) break;
                  }
                  return itemInfo ? (
                    <div key={itemId} className="cart-item-row">
                      <img className='cart-item-img' src={itemInfo.image} alt="" />
                      <p>{itemInfo.title}</p>
                      <span>₹{itemInfo.price}</span>
                      <p className='cart-item-quantity'>{qty}</p>
                    </div>
                  ) : null;
                })
              ) : (
                <p>Your cart is empty</p>
              )}
            </div>
          </div>

        </div>
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

          <button className='cart-rent-btn'>Rent Now</button>
        </div>


      </div>

    </div>
  )
}

export default Cart
