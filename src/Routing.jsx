import React from 'react'
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import AllCountries from './AllCountries';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { createRoot } from "react-dom/client";
import CountryDetails from './CountryDetails';
import FindNeighbours from './FindNeighbours';
import PersonalInformationPage from './PersonalInformationPage';
import HomePage from './HomePage';
import LogInPage from './LogInPage';
import { AuthContext } from './App';
import { useContext } from 'react';


export default function Routing() {
  const {authentication , setAuthentication} = useContext(AuthContext);
  
  return (
    <div>
         <BrowserRouter>
         { !(authentication) ? <LogInPage/>
         :
         <div>
         <Navbar  /> 
         <div className='flex'>
            <div className='sm:w-[15%] md:w-[20%] lg:w-[15%] '>
            <Sidebar />
            </div>
            <div className='sm:w-[85%] md:w-[80%] lg:w-[85%]'>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/AllCountries" element={<div className=''><AllCountries/></div>}/>
             <Route path='/AllCountries/:countryName' element={<div><CountryDetails/></div> }/>
             <Route path='/FindNeighbours/:countryName' element={<div><CountryDetails/></div> }/>
             <Route path='/FindNeighbours' element={<FindNeighbours />} />
             <Route path='/Profile' element={<PersonalInformationPage />}/>
         </Routes>
         </div>
         </div>
         </div>

}
         </BrowserRouter>
       
    </div>
  )
}
