import React from 'react'

function Navbar() {
  return (
    <div>
        <nav>
            <div className='flex flex-end justify-end pt-5 pr-5'>
                <button className='bg-red-500 px-4 py-2 rounded-md text-white'>Logout</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar