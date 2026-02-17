import React, { createContext, useState } from 'react';

// single source of truth for the app context
export const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => {
  const url = 'http://localhost:4000';
  const [menu, setMenu] = useState('home');
  const [slider, setSlider] = useState(true);
  const [currState, setCurrState] = useState('sign up');
  const [loginPopUp, setLoginPopUp] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [token, setToken] = useState(() => localStorage.getItem('token') || '');
  const [cartItems, setCartItems] = useState({});

  const addTocart = async (itemid) => {
    if (!cartItems[itemid]) {
      setCartItems(prev => ({ ...prev, [itemid]: 1 }))
    }
    else {
      setCartItems(prev => ({ ...prev, [itemid]: prev[itemid] + 1 }))
    }
    if (token) {
      await axios.post(url + "/api/cart/add", [itemid], { headers: { token } })
    }
  }

  const removeFromcart = async (req, res) => {
    setCartItems(prev => ({ ...prev, [itemid]: prev[itemid] - 1 }));
    if (token) {
      await axios.post(url + "/api/cart/remove", { itemid }, { headers: { token } });
    }
  }

  const getTotalcartAmt = () => {
    let totalAmt = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmt += itemInfo.price * cartItems[item]
      }
    }
    return totalAmt;
  }

  const cartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    setCartItems(response.data.cartData);
  }

  useEffect(() => {
    async function loadData() {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await cartData(localStorage.getItem("token"));
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
    addTocart,
    removeFromcart,
    getTotalcartAmt,
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};