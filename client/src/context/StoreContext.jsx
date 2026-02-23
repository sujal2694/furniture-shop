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

  const addTocart = async (itemid) => {
    setCartItems(prev => ({ ...prev, [itemid]: (prev[itemid] || 0) + 1 }));
    if (token) {
      try {
        await axios.post(url + "/api/cart/add", { itemid }, { headers: { token } })
      } catch (err) {
        // swallow or handle error as needed
      }
    }
  }

  const removeFromcart = async (itemid) => {
    setCartItems(prev => {
      const count = prev[itemid] || 0;
      if (count <= 1) {
        const { [itemid]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemid]: count - 1 };
    });
    if (token) {
      try {
        await axios.post(url + "/api/cart/remove", { itemid }, { headers: { token } });
      } catch (err) {
        // swallow or handle error as needed
      }
    }
  }

  const getTotalcartAmt = () => {
    let totalAmt = 0;
    for (const itemId in cartItems) {
      const qty = cartItems[itemId];
      if (!qty) continue;
      const idNum = Number(itemId);
      let itemInfo = null;
      for (const catArr of Object.values(products)) {
        itemInfo = catArr.find((p) => p._id === idNum);
        if (itemInfo) break;
      }
      if (itemInfo) totalAmt += itemInfo.price * qty;
    }
    return totalAmt;
  }

  const cartData = async (authToken) => {
    try {
      const response = await axios.post(url + "/api/cart/get", {}, { headers: { token: authToken } });
      setCartItems(response.data.cartData);
      console.log(response.data);
    } catch (err) {
      // ignore for now
    }
  }

  useEffect(() => {
    async function loadData() {
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
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};