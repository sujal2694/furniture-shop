import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import toast from 'react-hot-toast';

const LoginPage = ({ setToken, url }) => {
    const [adminData, setAdminData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [currState, setCurrState] = useState("sign up");

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAdminData(adminData => ({ ...adminData, [name]: value }));
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "sign up") {
            newUrl += "/api/admin/register"
        } else {
            newUrl += "/api/admin/login"
        }

        const response = await axios.post(newUrl, adminData);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setAdminData({
                name: "",
                email: "",
                password: ""
            })
            toast.success(currState === "sign up" ? "Registration successful" : "Login successful");
        } else {
            toast.error(response.data.message);
        }
    }

    return (
        <div className='w-screen h-screen'>
            <div className='flex items-center justify-center w-full h-full'>
                <form onSubmit={onSubmit} className='lg:w-[25vw] 2xl:w-[30vw] md:w-[50vw] w-[90vw] border border-gray-200/30 rounded-2xl flex items-start justify-center flex-col p-10 shadow-2xl'>
                    <div className='text-3xl text-gray-800 uppercase font-semibold mb-5'>
                        <h1>{currState}</h1>
                    </div>
                    <div className='w-full flex items-center justify-center flex-col gap-5'>
                        {currState === "sign up"
                            ? <>
                                <div className='w-full'>
                                    <p className='text-sm text-gray-500 tracking-wider'>Organization Name</p>
                                    <input onChange={onChangeHandler} name='name' value={adminData.name} className='border border-gray-400/30 w-full pl-3 mt-2 rounded-sm px-2 py-2 cursor-pointer' type="text" placeholder='Type here ...' />
                                </div>
                            </>
                            : <></>
                        }

                        <div className='w-full'>
                            <p className='text-sm text-gray-500 tracking-wider'>Email</p>
                            <input onChange={onChangeHandler} name='email' value={adminData.email} className='border border-gray-400/30 w-full pl-3 mt-2 rounded-sm px-2 py-2 cursor-pointer' type="email" placeholder='Type here ...' />
                        </div>
                        <div className='w-full'>
                            <p className='text-sm text-gray-500 tracking-wider'>Password</p>
                            <input onChange={onChangeHandler} name='password' value={adminData.password} className='border border-gray-400/30 w-full pl-3 mt-2 rounded-sm px-2 py-2 cursor-pointer' type="password" placeholder='Type here ...' />
                        </div>
                    </div>
                    <div className='flex items-center gap-3 my-4'>
                        <input className='w-3 border border-gray-200/30 cursor-pointer' type="checkbox" />
                        <p className='text-sm text-gray-500 tracking-wider wrap-break-word'>Accept the <span className='text-blue-500/80 underline cursor-pointer'>terms & conditions.</span></p>
                    </div>
                    <button className='w-full bg-gray-800 text-sm text-white py-3 rounded-md hover:bg-gray-900/80 uppercase tracking-wide cursor-pointer' type='submit'>{currState === "sign up" ? "create an account" : "sign in"}</button>

                    <p className='w-full text-center mt-4 text-gray-500/90 text-md'>{currState === "sign up" ? "If you already have an account. " : "If you don't have an account. "}<span onClick={() => setCurrState(currState === "sign up" ? "sign in" : "sign up")} className='text-blue-500/90 underline uppercase text-sm cursor-pointer'>{currState === "sign up" ? "sign in" : "sign up"}</span></p>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
