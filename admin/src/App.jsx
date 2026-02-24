import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import AddItem from './components/AddItem'
import OrderList from './components/OrderList'
import ProductsList from './components/ProductsList'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='lg:w-[85vw] m-auto flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<AddItem />} />
          <Route path='/orders' element={<OrderList />} />
          <Route path='/productsList' element={<ProductsList />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
