import React, { useState } from 'react'
import { filterOptions } from "./ConstantData";
import {filterCountry} from "./AllCountries"

export default function Filter({prop1, setfilterCountry, setshowFilterCountries}) {
    
    const filterValue = (value) => {
        setfilterCountry(value);
       setshowFilterCountries(true);
      };
    
    
  return (
      <div className="flex sm:ml-1 md:ml-2 sm:mt-2 text-xs pt-3 text-white">
        <div>
          <button
            className={`bg-gray-600 rounded-lg text-xs hover:bg-gray-500 ${prop1.label.length > 12 ? "sm:w-24" : "w-14"}`}
            onClick={()=>{
                filterValue(prop1.value)}}
          >
            {prop1.label}
          </button>
        </div>
    </div>
  )
}
