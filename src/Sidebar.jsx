import React, { useEffect, useState } from 'react'
import homeicon from './home-icon.png'
import search from './search.png'
import detail from './detail-icon.png'

export default function Sidebar() {
    const [sidebar,setsidebar]=useState(true);
    /*useEffect(()=>
    {
    },[sidebar]);
*/
    const controlsidebar=()=>
    {
        setsidebar(!sidebar);
         
    }
  return (
   <div>
  <nav className={`bg-gray-300 sm:w-20 fixed h-full rounded-lg ${sidebar ? "w-36  " : "w-20"}`}>
    <ul className="mt-2">
      <li className="bg-gray-400 hover:bg-slate-100 rounded-md">
        <button className="flex items-center">
          <img
            className="sm:h-4 px-12 md:h-5 md:px-0 md:pl-2"
            src={homeicon}
            alt="home image"
          />
          <div className={`sm:hidden md:ml-1 md:block`} >All Countries</div>
        </button>
      </li>

      <li className="bg-gray-400  mt-4  hover:bg-slate-100 rounded-md">
        <button className="flex items-center">
          <img className="sm:h-4 px-12 md:px-0 md:ml-1 md:pl-1 " src={detail} />
          <div className={`sm:hidden md:block md:ml-2 `}>Country Details</div>
        </button>
      </li>

      <li className="bg-gray-400 mt-4  hover:bg-slate-100 rounded-md">
        <button className="flex items-center">
          <img className="sm:h-7 px-10 md:px-0" src={search} />
          <div className="sm:hidden md:block md:mr-2 md:flex-wrap">FindNeighbours</div>
        </button>
      </li>
    </ul>
    
        <li><button className='bg-green-700' onClick={controlsidebar}>Sidebar</button></li>
  </nav>
  
</div>
  )
}
