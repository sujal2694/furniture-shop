import React from 'react'
import "./PlaceOrder.css"
import { useContext } from 'react'
import StoreContext from '../../context/StoreContext'
import { useState } from 'react'

const PlaceOrder = () => {
    const { getTotalcartAmt } = useContext(StoreContext);
    const [data,setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        street:"",
        city:"",
        state:"",
        pinCode:"",
        phone:""
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data=>({...data,[name]:value}))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        
    }
    return (
        <form className='place-order'>
            <div className='place-order-list'>
                <p className='title'>Delivery Information</p>
                <div className='multi-fields'>
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="text" />
                <input type="text" />
                <div className="multi-fields">
                    <input type="text" />
                    <input type="text" />
                </div>
                <div className="multi-fields">
                    <input type="text" />
                    <input type="text" />
                </div>
                <input type="text" />
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <div>
                        <div className="cart-total-dea">
                            <p>Sub total</p>
                            <p>{getTotalcartAmt()}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalcartAmt() === 0 ? 0 : 40}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>{getTotalcartAmt()===0?getTotalcartAmt():getTotalcartAmt()+40}</p>
                        </div>
                    </div>
                    <button type="submit">PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
