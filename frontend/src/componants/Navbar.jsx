import React from 'react'

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem('token')
    }
  return (
    <div>
        <div className='text-white flex  w-full h-[50px] bg-gray-700'>
{localStorage.getItem('token') && ( <button onClick={handleLogout} className='p-2.5 bg-blue-400'>Logout</button>)}
           
        </div>
    </div>
  )
}

export default Navbar