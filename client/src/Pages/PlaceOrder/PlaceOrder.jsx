import React, { useEffect } from 'react'
import "./PlaceOrder.css"
import { useContext } from 'react'
import { useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
    const { getTotalcartAmt, getDiscount, productsList, cartItems, url, token } = useContext(StoreContext);
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        street: "",
        city: "",
        state: "",
        pinCode: "",
        phone: ""
    })

    const onChangehandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        productsList.map((item) => {
            if (cartItems[item._id]) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalcartAmt + 40
        }
        let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url)
        } else {
            toast.error("Something went wrong")
        }

    }

    useEffect(() => {
        if (!token) {
            navigate('/cart');
        } else if (getTotalcartAmt() === 0) {
            navigate("/cart")
        }
    }, [token])
    return (
        <div className='place-order-container'>
            <form onSubmit={placeOrder} className="place-order">
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input name="firstName" value={data.firstname} onChange={onChangehandler} type="text" placeholder="First name" required />
                        <input name="lastName" value={data.lastname} onChange={onChangehandler} type="text" placeholder="Last name" required />
                    </div>
                    <input name="email" value={data.email} onChange={onChangehandler} type="email" placeholder="Email address" required />
                    <input name="street" value={data.street} onChange={onChangehandler} type="text" placeholder="Street" required />
                    <div className="multi-fields">
                        <input name="city" value={data.city} onChange={onChangehandler} type="text" placeholder="City" required />
                        <input name="state" value={data.state} onChange={onChangehandler} type="text" placeholder="State" required />
                    </div>
                    <div className="multi-fields">
                        <input name="pinCode" value={data.pinCode} onChange={onChangehandler} type="text" placeholder="Zip code" required />
                        <input name="phone" value={data.phone} onChange={onChangehandler} type="text" placeholder="Phone" required />
                    </div>
                </div>
                <div className="cart-total">
                    <h1>Total Bill</h1>
                    <ul className="cart-bill">
                        <li className='cart-total-price'>
                            <p>Cart Total:</p>
                            <span>₹{getTotalcartAmt()}</span>
                        </li>
                        <li className='cart-total-discount'>
                            <p>Discounts:</p>
                            <span>-{getDiscount() === 0 ? 0 : getDiscount()}%</span>
                        </li>
                        <li className='cart-total-price'>
                            <p>Delivery Fees:</p>
                            <span>₹40</span>
                        </li>
                        <hr className='section' />
                        <li className='cart-total-bill'>
                            <p>Total:</p>
                            <span>₹{(getTotalcartAmt() * (getDiscount() === 0 ? 0 : getDiscount() / 100)).toFixed(2)}</span>
                        </li>
                    </ul>

                    <button onClick={() => { }} className='cart-rent-btn'>Shop Now</button>
                </div>
            </form>
        </div>
    )
}

export default PlaceOrder
