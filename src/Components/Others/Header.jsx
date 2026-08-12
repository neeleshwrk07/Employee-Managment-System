import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row justify-between '>
    <div className=' text-black p-10 flex justify-between items-center h-2/6'> 
        <p className=' p-3 text-5xl'>Hello,</p> <br /> 
        <p className='font-bold text-6xl'>Neelesh</p>
        
      </div>
      <button className='bg-red-700 text-white rounded-4xl px-2 h-14 text-3xl active:scale-115 hover:scale-105 delay-75 '>Log Out</button>
      </div>
  )
}

export default Header
