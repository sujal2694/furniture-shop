import React, { useContext } from 'react'
import './ProductPage.css'
import { assets, products } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const ProductPage = () => {
  const { addTocart, removeFromcart, cartItems = {}, productsList = [], url } = useContext(StoreContext);
  return (
    <div className='product-page'>
      <div className="product-page-title">
        <h1>All <span>Products</span></h1>
      </div>
      <div className="products">
        {productsList && productsList.length > 0 ? productsList.map((item, index) => {
          return (
            <div className='item' key={index}>
              <img className='item-img' src={`${url}/images/${item.image}`} alt={item.title} />
              <h3 className='item-name'>{item.title}</h3>
              <h4 className='item-price'>₹{item.price}</h4>
              <div className="add-icon">
                {!cartItems[item._id]
                  ? (<img onClick={() => addTocart(item._id)} className='add-to-cart-btn' src={assets.add_cart_icon} alt="" />)
                  : (<div className='add-remove-btn' id='hidden'>
                    <img onClick={() => addTocart(item._id)} className='increment' src={assets.add_icon_green} alt="" />
                    <p>{cartItems[item._id]}</p>
                    <img onClick={() => removeFromcart(item._id)} className='decrement' src={assets.remove_icon_red} alt="" />
                  </div>)}
              </div>
            </div>
          )
        }) : <p>Loading products...</p>}
      </div>
    </div>
  )
}

export default ProductPage
