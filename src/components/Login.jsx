import React from 'react'

const Login = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <div className='bg-[#00fcdc] text-[#243065]  h-[500px] w-[400px] flex justify-center items-center flex-col rounded-[20px]'>
        <p className='mx-auto text-2xl font-bold'>Login</p>
        <label>
          email:
          <br></br>
          <input type="text" className='mt-2 w-[300px] h-[50px] border p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='email...' />
        </label>
        <label className='mt-12'>
          password:
          <br></br>
          <input type="password" className='mt-2 border w-[300px] h-[50px] p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='password...' />
        </label>
        <div className='flex justify-center items-center'>
          <button className='text-white  bg-[#6842ee] p-3 mt-10 w-[300px] rounded-[10px]'>login</button>
        </div>
      </div>
    </div>
  )
}

export default Login