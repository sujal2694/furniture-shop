import React from 'react'

const LoginPage = () => {
  return (
    <div className='w-screen h-screen'>
      <div className='flex items-center justify-center w-full h-full'>
        <form className='lg:w-[25vw] md:w-[50vw] w-[90vw] border border-gray-200/30 rounded-2xl flex items-start justify-center flex-col p-10 shadow-2xl'>
            <div className='text-3xl text-gray-800 uppercase font-semibold mb-5'>
                <h1>sign up</h1>
            </div>
            <div className='w-full flex items-center justify-center flex-col gap-5'>
                <div className='w-full'>
                    <p className='text-sm text-gray-500 tracking-wider'>Organization Name</p>
                    <input className='border border-gray-400/30 w-full pl-3 mt-2 rounded-sm px-2 py-2 cursor-pointer' type="text" placeholder='Type here ...' />
                </div>
                <div className='w-full'>
                    <p className='text-sm text-gray-500 tracking-wider'>Email</p>
                    <input className='border border-gray-400/30 w-full pl-3 mt-2 rounded-sm px-2 py-2 cursor-pointer' type="text" placeholder='Type here ...' />
                </div>
                <div className='w-full'>
                    <p className='text-sm text-gray-500 tracking-wider'>Password</p>
                    <input className='border border-gray-400/30 w-full pl-3 mt-2 rounded-sm px-2 py-2 cursor-pointer' type="text" placeholder='Type here ...' />
                </div>
            </div>
            <div className='flex items-center gap-3 my-4'>
                <input className='w-3 border border-gray-200/30 cursor-pointer' type="checkbox" />
                <p className='text-sm text-gray-500 tracking-wider wrap-break-word'>Accept the <span className='text-blue-500/80 underline cursor-pointer'>terms & conditions.</span></p>
            </div>
            <button className='w-full bg-gray-800 text-sm text-white py-3 rounded-md hover:bg-gray-900/80 uppercase tracking-wide cursor-pointer' type='submit'>create an account</button>
            <p className='w-full text-center mt-4 text-gray-500/90 text-md'>If you already have an organization? <span className='text-blue-500/90 underline uppercase text-sm cursor-pointer'>sign in</span></p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
