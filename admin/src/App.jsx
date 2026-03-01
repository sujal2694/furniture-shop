import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import AddItem from './components/AddItem'
import OrderList from './components/OrderList'
import ProductsList from './components/ProductsList'
import { Toaster } from 'react-hot-toast'
import LoginPage from './components/LoginPage'

const App = () => {
  const url = 'http://localhost:4000'
  const [token, setToken] = useState("");
  
  useEffect(() => {
    async function loadData() {
      const t = localStorage.getItem("token");
      if (t) {
        setToken(t);
      }
    }
    loadData();
  }, [])
  return (
    <div>
      {!token
        ? <LoginPage setToken={setToken} token={token} url={url}/>
        : <><Navbar />
          <div className='lg:w-[85vw] h-screen max-h-[500vh] m-auto flex items-start'>
            <Sidebar />
            <Routes>
              <Route path='/add' element={<AddItem url={url} />} />
              <Route path='/orders' element={<OrderList url={url} />} />
              <Route path='/productsList' element={<ProductsList url={url} />} />
            </Routes>
          </div>
        </>
      }


      <Toaster />
    </div>
  )
}

export default App
