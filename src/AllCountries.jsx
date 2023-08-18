import React, { useEffect, useState } from "react";
import Card from "./Card";
import SidebarWidth from "./Sidebar";
import { filterOptions } from "./ConstantData";
import Filter from "./Filter";

export default function AllCountries() {
  const FetchCountriesData = async () => {
    try {
      const Url = "https://restcountries.com/v3.1/all";
      let Response = await fetch(Url);
      let ResponseData = Response.json();
      return ResponseData;
    } catch (error) {
      throw new Error(error);
    }
  };
  const [apiData, setapiData] = useState([]);
  const [filterCountry, setfilterCountry] = useState(null);
  const [showFilterCountries, setshowFilterCountries] = useState(false);
  useEffect(() => {
    (async () => {
      let countryData = await FetchCountriesData();
      let sliceData = countryData.slice(0, 20);

      if (filterCountry == null) {
        setapiData(sliceData);
      } else {
        let FilterCountries = sliceData.filter((Value) => {
          return Value.continents[0] === filterCountry;
        });
        setapiData(FilterCountries);
      }
    })();
  }, [filterCountry]);
  return (
    <div className={` `}>
      <div>
        <div className="flex">
          {
            filterOptions.map((value)=>{
              console.log(value)
              return(
              <span key={value.key}> <Filter prop1={value} setfilterCountry={setfilterCountry} setshowFilterCountries={setshowFilterCountries}/> </span>
            )})
          }
        </div>
         </div>
      <div className={`container sm:mt-5 sm:pl-1`}>
        <div className=" grid sm:grid-cols-3 sm:gap-y-20 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
          {apiData.length > 0 ? (
            apiData.map((Value, Index) => {
              return (
                <div key={Index}>
                  <Card Data={Value} />
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
