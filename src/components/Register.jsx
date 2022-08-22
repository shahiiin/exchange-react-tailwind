import React from 'react'

function register() {
  return (
    <div className=' h-screen flex justify-center items-center'>
    
      <div className=' h-screen flex justify-center items-center'>
        <div className='bg-[#00fcdc] text-[#243065]  h-[650px] w-[400px] flex justify-center items-center flex-col rounded-[20px]'>
          <p className='mx-auto text-2xl font-bold'>Register</p>
          <label>
            full name:
            <br></br>
            <input type="text" className='mt-2 w-[300px] h-[50px] border p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='fullName...' />
          </label>
          <label className='mt-8'>
            user name:
            <br></br>
            <input type="text" className='mt-2 border h-[50px] w-[300px] p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='user name...' />
          </label>
          <label className='mt-8'>
            Email:
            <br></br>
            <input type="email" className='mt-2 border h-[50px] w-[300px] p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='email...' />
          </label>
          <label className='mt-8'>
            Password:
            <br></br>
            <input type="password" className='mt-2 border h-[50px] w-[300px] p-2 border-[#243065] rounded-lg placeholder:text-black' placeholder='Password...' />
          </label>
          <div className='flex justify-center items-center'>
            <button className='text-white  bg-[#6842ee] p-3 mt-10 w-[300px] rounded-[10px]'>register</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default register