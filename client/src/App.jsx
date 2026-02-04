import React, { useContext } from 'react'
import Navbar from './components/Navbar/Navbar'
import LoginPage from './components/Loginpage/LoginPage'
import { StoreContext } from './context/Context'

const App = () => {
  const { loginPopUp } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      {loginPopUp ? <LoginPage /> : ""}
    </div>
  )
}

export default App
