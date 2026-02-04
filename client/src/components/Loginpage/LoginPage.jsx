import React, { useContext } from 'react'
import './LoginPage.css'
import { StoreContext } from '../../context/Context'

const LoginPage = () => {
    const { currState, setCurrState, setLoginPopUp } = useContext(StoreContext);
    return (
        <div className='login-page'>
            <div className='login-form'>
                <div className='form-head'>
                    <h1>{currState}</h1>
                    <i className='bx bx-x' onClick={()=>setLoginPopUp(false)}></i>
                </div>

                <form>
                    <div className="input-box">
                        {currState === "sign up"
                            ? <div className="input">
                                <label htmlFor="username">Username</label>
                                <input type="text" placeholder='Type here' id='username' />
                            </div>
                            : ""
                        }
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder='Type here' id='email' />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input type="text" placeholder='Type here' id='password' />
                        </div>
                    </div>

                    {currState === "sign up"
                        ? <div>
                            <button className='submit-btn' type='submit'>Create an account</button>
                        </div>
                        : <div>
                            <button className='submit-btn' type='submit'>Log In</button>
                        </div>
                    }

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
