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
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};