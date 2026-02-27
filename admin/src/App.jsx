import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import AddItem from './components/AddItem'
import OrderList from './components/OrderList'
import ProductsList from './components/ProductsList'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const url = 'http://localhost:4000'
  return (
    <div>
      <Navbar />
      <div className='lg:w-[85vw] m-auto flex items-start min-h-screen'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<AddItem url={url} />} />
          <Route path='/orders' element={<OrderList url={url} />} />
          <Route path='/productsList' element={<ProductsList url={url} />} />
        </Routes>
      </div>
      <Toaster/>
    </div>
  )
}

export default App
