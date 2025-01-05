import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center fixed justify-around bg-gray-900 w-full z-50  p-4'>
        <div className='text-2xl text-white'>Ritik Dubey</div>
        <div>
            <ul className='flex space-x-8 text-gray-300'>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar