import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/Loginpage/LoginPage'
import { StoreContext } from './context/Context'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import Subcription from './components/Subcription/Subscription'
import Footer from './components/Footer/Footer'

const App = () => {
  const { loginPopUp } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      {loginPopUp ? <LoginPage /> : ""}
      <Hero />
      <Products />
      <Subcription/>
      <Footer/>
    </div>
  )
}

export default App
