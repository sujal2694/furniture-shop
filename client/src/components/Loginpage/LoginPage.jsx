import React, { useContext } from 'react'
import './LoginPage.css'
import { StoreContext } from '../../context/StoreContext' 
import { assets } from '../../assets/assets';
import axios from 'axios'
import toast from 'react-hot-toast';

const LoginPage = () => {
    const { currState, setCurrState, setLoginPopUp, url, setUserData, userData, setToken } = useContext(StoreContext);

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData(userData => ({ ...userData, [name]: value }));
    }

    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "sign up") {
            newUrl += "/api/user/register"
        } else {
            newUrl += "/api/user/login"
        }

        const response = await axios.post(newUrl, userData);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token);
            setLoginPopUp(false);
            setUserData({
                name: "",
                email: "",
                password: ""
            })
            toast.success(currState === "sign up" ? "Registration successful" : "Login successful");
        } else {
            console.log(response.data.message);
            toast.error(response.data.message);
        }
    }
    return (
        <div className='login-page'>
            <div className='login-form'>
                <div className='form-head'>
                    <h1>{currState}</h1>
                    <img src={assets.cross_icon} alt='' onClick={() => setLoginPopUp(false)}></img>
                </div>

                <form onSubmit={onLogin}>
                    <div className="input-box">
                        {currState === "sign up"
                            ? <div className="input">
                                <label htmlFor="username">Username</label>
                                <input type="text" onChange={onChangeHandler} name='name' value={userData.name} placeholder='Type here' id='username' />
                            </div>
                            : ""
                        }
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={onChangeHandler} name='email' value={userData.email} placeholder='Type here' id='email' />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input type="password" onChange={onChangeHandler} name='password' value={userData.password} placeholder='Type here' id='password' />
                        </div>
                    </div>

                    <div>
                        <button className='submit-btn' type='submit'>{currState === "sign up" ? "create an account" : "Login"}</button>
                    </div>

                </form>

                {currState === "sign up"
                    ? <div>
                        <p>If you have an account? <span onClick={() => setCurrState("log in")}>Log In</span></p>
                    </div>
                    : <div>
                        <p>If you don't have an account? <span onClick={() => setCurrState("sign up")}>Sign Up</span></p>
                    </div>
                }


            </div>
        </div>
    )
}

export default LoginPage
