import React from 'react' 
import './Products.css'
import { products } from '../../assets/assets'

const Products = () => {
    return (
        <div className='products-container'>
            <div className='head-pro'>
                <div className='products-heading'>
                    <h1>Latest Collections</h1>
                    <hr />
                </div>
                <p>Shop now and get amazing deals from us.</p>
            </div>
            <div className='products-list'>
                {products.sofa.map((item, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div key={index} className='item-box'>
                                <div className="item">
                                    <div className='img-container'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='item-details'>
                                        <h3 className='item-name'>{item.title}</h3>
                                        <p className='item-price'>₹ {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

                {products.bed.map((item, index) => {
                    if (index % 2 !== 0) {
                        return (
                            <div key={index} className='item-box'>
                                <div className="item">
                                    <div className='img-container'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='item-details'>
                                        <h3 className='item-name'>{item.title}</h3>
                                        <p className='item-price'>₹ {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

                {products.center_table.map((item, index) => {
                    if (index % 3 !== 0) {
                        return (
                            <div key={index} className='item-box'>
                                <div className="item">
                                    <div className='img-container'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='item-details'>
                                        <h3 className='item-name'>{item.title}</h3>
                                        <p className='item-price'>₹ {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

                {products.refrigerator.map((item, index) => {
                    if (index % 2 !== 0) {
                        return (
                            <div key={index} className='item-box'>
                                <div className="item">
                                    <div className='img-container'>
                                        <img className='img' src={item.image} alt="" />
                                    </div>
                                    <div className='item-details'>
                                        <h3 className='item-name'>{item.title}</h3>
                                        <p className='item-price'>₹ {item.price}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Products
