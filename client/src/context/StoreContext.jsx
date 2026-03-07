import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { products } from '../assets/assets';

// single source of truth for the app context
export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const url = 'http://localhost:4000';
  const [menu, setMenu] = useState('home');
  const [slider, setSlider] = useState(false);
  const [currState, setCurrState] = useState('sign up');
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [token, setToken] = useState();
  const [cartItems, setCartItems] = useState({});
  const [productsList, setProductsList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  let deliveryFees = 40;


  const addTocart = async (itemid) => {
    const id = String(itemid);

    setCartItems(prev => {
      const next = { ...prev, [id]: (prev[id] || 0) + 1 };
      return next;
    });

    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemid: id }, { headers: { token } });
      } catch (err) {
        console.error("cart add request failed", err);
      }
    }
  }

  const removeFromcart = async (itemid) => {
    const id = String(itemid);

    setCartItems(prev => {
      const count = prev[id] || 0;
      if (count <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: count - 1 };
    });

    if (token) {
      try {
        await axios.post(url + "/api/cart/remove", { itemid: id }, { headers: { token } });
      } catch (err) {
        console.error("cart remove request failed", err);
      }
    }
  }

  const getTotalcartAmt = () => {
    let totalAmt = 0;
    for (const itemId in cartItems) {
      const qty = cartItems[itemId];
      if (!qty) continue;
      const itemInfo = productsList.find((p) => p._id === itemId);
      if (itemInfo) totalAmt += itemInfo.price * qty;
    }
    return totalAmt;
  }

  const fetchProductsList = async () => {
    const response = await axios.get(url + "/api/product/list");
    if (response.data.success) {
      setProductsList(response.data.data);
    }
  }

  const cartData = async (authToken) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token: authToken } });
    setCartItems(response.data.cartData);
  }

  const getDiscount = () => {
    const ids = Object.keys(cartItems);
    if (ids.length === 0 || productsList.length === 0) {
      return 0;
    }

    const discounts = ids
      .map((itemId) => {
        const itemInfo = productsList.find((p) => p._id === itemId);
        return itemInfo ? Number(itemInfo.discount) : 0;
      })
      .filter((d) => !isNaN(d));

    if (discounts.length === 0) {
      return 0;
    }
    const sum = discounts.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / discounts.length;

    return avg.toFixed(1);
  }

  const fetchOrders = async (authToken) => {
    const response = await axios.get(url + "/api/order/list", {}, { headers: { token: authToken } });
    console.log(response.data.data);

  }

  useEffect(() => {
    async function loadData() {
      await fetchProductsList();
      const t = localStorage.getItem("token");
      if (t) {
        setToken(t);
        await cartData(t);
        await fetchOrders(t);
      }
    }
    loadData();
  }, [])

  const contextValue = {
    menu,
    setMenu,
    slider,
    setSlider,
    currState,
    setCurrState,
    loginPopUp,
    setLoginPopUp,
    url,
    userData,
    setUserData,
    token,
    setToken,
    cartItems,
    addTocart,
    removeFromcart,
    getTotalcartAmt,
    productsList,
    setProductsList,
    getDiscount,
    deliveryFees,
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};