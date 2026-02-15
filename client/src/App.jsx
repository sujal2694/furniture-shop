import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/Loginpage/LoginPage'
import { StoreContext } from './context/StoreContext' 
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ProductPage from './Pages/ProductPage/ProductPage'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './Pages/Cart/Cart'

const App = () => {
  const { loginPopUp } = useContext(StoreContext);
  return (
    <div>
      {loginPopUp ? <LoginPage /> : ""}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
