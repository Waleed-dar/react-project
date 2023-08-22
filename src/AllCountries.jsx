import React, { useEffect, useState } from "react";
import Card from "./Card";
import SidebarWidth from "./Sidebar";
import { filterOptions } from "./ConstantData";
import Filter from "./Filter";

export default function AllCountries() {
  const fetchCountriesData = async () => {
    try {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url);
      const responseData = response.json();
      return responseData;
    } catch (error) {
      throw new Error(error);
    }
  };
  const [apiData, setapiData] = useState([]);
  const [filterCountry, setfilterCountry] = useState(null);
  const [showFilterCountries, setshowFilterCountries] = useState(false);
  useEffect(() => {
    (async () => {
      let countryData = await fetchCountriesData();
      let sliceData = countryData.slice(0, 20);
      if (!filterCountry) {
        setapiData(sliceData);
      } else {
        let filterCountries = sliceData.filter((value) => {
          return value.continents[0] === filterCountry;
        });
        setapiData(filterCountries);
      }
    })();
  }, [filterCountry]);
  return (
    <div className={` `}>
      <div>
        <div className="flex">
          {
            filterOptions.map((value)=>{

              return(
              <span key={value.key}> <Filter filterOptions={value} setfilterCountry={setfilterCountry} setshowFilterCountries={setshowFilterCountries}/> </span>
            )})
          }
        </div>
         </div>
      <div className={`container sm:mt-5 sm:pl-1 lg:pl-0 `}>
        <div className=" grid sm:grid-cols-3 sm:gap-y-20 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 ">
          {apiData.length > 0 ? (
            apiData.map((value, index) => {
              return (
                <div key={index}>
                  <Card data={value} />
                </div>
              );
            })
          ) : (
            <div className="text-xl"> No Country To Show </div>
          )}
        </div>
      </div>
    </div>
  );
}
