import React from 'react'
import './ProductPage.css'
import {assets, products} from '../../assets/assets'

const ProductPage = () => {
  return (
    <div className='product-page'>
      <div className="products">
        {products.sofa.map((item,index)=>{
          return(
            <div className='item' key={index}>
              <img className='item-img' src={item.image} alt="" />
              <h3>{item.title}</h3>
              <h4>{item.price}</h4>
              <div className="add-icon">
                <img className='add-to-cart-btn' src={assets.add_cart_icon} alt="" />
                <div className='add-remove-btn' id='hidden'>
                  <img className='increment' src={assets.add_icon_green} alt="" />
                  <img className='decrement' src={assets.remove_icon_red} alt="" />
                </div>
              </div>
            </div>
          )
        })}

        {products.ac.map((item,index)=>{
          return(
            <div className='item' key={index}>
              <img src={item.image} alt="" />
            </div>
          )
        })}

        {products.microwave.map((item,index)=>{
          return(
            <div className='item' key={index}>
              <img src={item.image} alt="" />
            </div>
          )
        })}

        {products.bed.map((item,index)=>{
          return(
            <div className='item' key={index}>
              <img src={item.image} alt="" />
            </div>
          )
        })}

        {products.refrigerator.map((item,index)=>{
          return(
            <div className='item' key={index}>
              <img src={item.image} alt="" />
            </div>
          )
        })}

        {products.center_table.map((item,index)=>{
          return(
            <div className='item' key={index}>
              <img src={item.image} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductPage
