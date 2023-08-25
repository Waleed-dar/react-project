import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import AllCountries from './AllCountries';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { createRoot } from "react-dom/client";
import CountryDetails from './CountryDetails';
import FindNeighbours from './FindNeighbours';


export default function Routing() {
  return (
    <div>
         <BrowserRouter>
         <Navbar />
         <div className='flex'>
            <div className='sm:w-[15%] md:w-[20%] lg:w-[15%] '>
            <Sidebar />
            </div>
            <div className='sm:w-[85%] md:w-[80%] lg:w-[85%]'>
         <Routes>
            <Route path="/" element={<div>Home page </div>} />
            <Route path="/AllCountries" element={<div className=''><AllCountries/></div>}/>
             <Route path='/AllCountries/:countryName' element={<div><CountryDetails/></div> }/>
             <Route path='/FindNeighbours/:countryName' element={<div><CountryDetails/></div> }/>
             <Route path='/FindNeighbours' element={<FindNeighbours />} />
         </Routes>
         </div>
         </div>
         </BrowserRouter>
    </div>
  )
}
