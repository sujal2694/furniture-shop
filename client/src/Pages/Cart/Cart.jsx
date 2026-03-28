import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItems, getTotalcartAmt, addTocart, removeFromcart, productsList, url, getDiscount, deliveryFees } = useContext(StoreContext);
  const navigate = useNavigate();
  const totalCartAmt = (getTotalcartAmt() - (getDiscount() === 0 ? 0 :(getTotalcartAmt() * getDiscount()) / 100)).toFixed(2)
  const onSubmit = () => {
    if (Object.keys(cartItems).length === 0) {
      alert("Your cart is empty.");
    }
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
                      <img onClick={() => addTocart(itemId)} src={assets.add_icon_green} className='add-btn' alt="" />
                      <img onClick={() => removeFromcart(itemId)} src={assets.remove_icon_red} className='remove-btn' alt="" />
                    </div>
                  ) : null;
                })}
              </div>
            </div>
          </div> : <div className='empty'>
            <p>Your cart is empty</p>
            <button onClick={() => navigate("/products")}>Shop Now</button>
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
              <span>-{getDiscount()}%</span>
            </li>
            <li className='cart-total-price'>
              <p>Delivery Fees:</p>
              <span>₹{getTotalcartAmt()===0?0:deliveryFees}</span>
            </li>
            <hr className='section' />
            <li className='cart-total-bill'>
              <p>Total:</p>
              <span>₹{getTotalcartAmt()===0?0:Number(totalCartAmt) + Number(deliveryFees)}</span>
            </li>
          </ul>

          <button onClick={() => {
            onSubmit();
            navigate("/placeorder")
          }} className='cart-rent-btn'>Shop Now</button>
        </div>


      </div>

    </div>
  )
}

export default Cart
