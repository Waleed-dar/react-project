import React from 'react'
import logo from './Images/logo.jpg'
export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-600 sm:h-10 md:h-18 flex items-center justify-between px-4 sm:px-8 sticky">
  <img
    className="w-18 h-8 xs:w-4 xs:h-4  sm:w-10 sm:h-9 md:w-12 md:h-8 pt-1"
    src={logo}
    alt="Logo"
  />
  <ul className="text-white xs:space-x-3 xs:text-xs sm:space-x-5 md:space-x-6 lg:space-x-8 flex justify-end">
    <li className=' hover:text-gray-900'><a href=''> Home</a></li>
    <li className=' hover:text-gray-900'><a href=''>Services</a></li>
    <li className=' hover:text-gray-900'><a href=''>Contact US</a></li>
    <li className=' hover:text-gray-900'>
      <div className="w-7 h-5 bg-blue-300 rounded-full px-2  ">
        <span className="">A</span>
      </div>
    </li>
  </ul>
</nav>
</div>
)
}
