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
    console.log(cartItems);
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

  useEffect(() => {
    async function loadData() {
      await fetchProductsList();
      const t = localStorage.getItem("token");
      if (t) {
        setToken(t);
        await cartData(t);
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
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};