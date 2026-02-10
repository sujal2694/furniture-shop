import React, { useContext } from 'react'
import { StoreContext } from '../../context/Context'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Navbar = () => {
    const { menu, setMenu, slider, setSlider, setLoginPopUp, token, setToken } = useContext(StoreContext);

    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }
    return (
        <div className='navbar'>
            <div className='nav'>
                <div className="logo">
                    <i onClick={() => setSlider(true)} className='bx bx-menu'></i>
                    <h1 onClick={() => navigate('/')}>Shop</h1>
                </div>
                <div id={slider ? "links" : "hidden"}>
                    <div onClick={() => setSlider(false)} className='close'>
                        <i className='bx bx-x'></i>
                    </div>
                    <ul className="nav-list">
                        <li onClick={() => setMenu("home")} className="nav-list-item" id={menu === "home" ? "menu" : ""}>Home</li>
                        <li onClick={() => setMenu("about")} className="nav-list-item" id={menu === "about" ? "menu" : ""}>about</li>
                        <li onClick={() => { setMenu("products"), navigate('/products') }} className="nav-list-item" id={menu === "products" ? "menu" : ""}>products</li>
                        <li onClick={() => setMenu("contact")} className="nav-list-item" id={menu === "contact" ? "menu" : ""}>contact us</li>
                    </ul>
                </div>
                <div className="nav-right">
                    <div className='search'>
                        <img src={assets.search_icon} alt="" />
                    </div>
                    <div className='cart'>
                        <i className='bx bx-cart'></i>
                    </div>
                    <div className='log-in-btn'>
                        <button onClick={()=>setLoginPopUp(true)}>SIgn Up</button>
                    </div>
                    {token ? <div className='user'>
                        <img src={assets.profile_icon} alt="" />
                        <div className='sign-in-opt'>
                            <ul className='opt-list'>
                                <li onClick={logout} className='opts opt-flex'>
                                    <i className='bx bx-arrow-out-right-square-half'></i>
                                    <p>Log Out</p>
                                </li>
                            </ul>
                        </div>
                    </div> : ""}

                </div>
            </div>
            <hr className='hr' />
        </div>
    )
}

export default Navbar
