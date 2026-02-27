import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, products } from '../../assets/assets'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'

const Cart = () => {
  const { cartItems, getTotalcartAmt, addTocart, removeFromcart } = useContext(StoreContext);
  const [productsList, setProductsList] = useState([]);
  const navigate = useNavigate();
  const onSubmit = () => {
    if (Object.keys(cartItems).length === 0) {
      alert("Your cart is empty.");
    }
  }

  const fetchProducts = async () => {
    try {
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
    }
  }

  const getDiscoount = () => {

  }

  useEffect(() => {
    fetchProducts();
  }, [])
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
                        <p className='cart-item-discount'>-{ }%</p>
                        <img onClick={() => addTocart(Number(itemId))} src={assets.add_icon_green} className='add-btn' alt="" />
                        <img onClick={() => removeFromcart(Number(itemId))} src={assets.remove_icon_red} className='remove-btn' alt="" />
                      </div>
                    ) : null;
                  })
                ) : ""}
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
              <span>0</span>
            </li>
            <hr className='section' />
            <li className='cart-total-bill'>
              <p>Total:</p>
              <span>₹{getTotalcartAmt()}</span>
            </li>
          </ul>

          <button onClick={onSubmit} className='cart-rent-btn'>Rent Now</button>
        </div>


      </div>

    </div>
  )
}

export default Cart
