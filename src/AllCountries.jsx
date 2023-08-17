import React, { useEffect, useState } from "react";
import Card from "./Card";
import SidebarWidth from "./Sidebar";
import { FilterOptions } from "./ConstantData";

export default function AllCountries() {
  const ApiCall = async () => {
    try {
      let Url = "https://restcountries.com/v3.1/all";
      let Response = await fetch(Url);
      let ResponseData = Response.json();
      return ResponseData;
    } catch (error) {
      throw new Error(error);
    }
  };

  const FilterValue = (value) => {
    setFilterCountry(value);
    setShowFilterCountries(true);
  };

  const [ApiData, setApiData] = useState([]);
  const [FilterCountry, setFilterCountry] = useState(null);
  const [showFilterCountries, setShowFilterCountries] = useState(false);
  useEffect(() => {
    (async () => {
      let CountryData = await ApiCall();
      let SliceData = CountryData.slice(0, 20);

      if (FilterCountry == null) {
        setApiData(SliceData);
      } else {
        let FilterCountries = SliceData.filter((Value) => {
          return Value.continents[0] === FilterCountry;
        });
        setApiData(FilterCountries);
      }
    })();
  }, [FilterCountry]);
  return (
    <div className={` `}>
      <div className="flex grid-cols-1 sm:ml-5 sm:mt-2 md:ml-3 space-x-1 text-xs pt-3 text-white">
        <div>
          <button
            className="bg-gray-600 rounded-lg sm:w-12 hover:bg-gray-500"
            onClick={() => {
              FilterValue(FilterOptions.Asia);
            }}
          >
            Asia
          </button>
        </div>
        <div>
          <button
            className="bg-gray-600 rounded-lg sm:w-14 hover:bg-gray-500 "
            onClick={() => FilterValue(FilterOptions.Africa)}
          >
            {" "}
            Africa
          </button>
        </div>
        <div>
          <button
            className="bg-gray-600 rounded-lg sm:w-20 hover:bg-gray-500"
            onClick={() => {
              FilterValue(FilterOptions.Antartica);
            }}
          >
            Antartica{" "}
          </button>
        </div>
        <div>
          <button
            className="bg-gray-600 rounded-lg sm:w-14 hover:bg-gray-500"
            onClick={() => {
              FilterValue(FilterOptions.Europe);
            }}
          >
            Europe
          </button>
        </div>
        <div>
          <button
            className="bg-gray-600 rounded-lg sm:w-24 hover:bg-gray-500"
            onClick={() => {
              FilterValue(FilterOptions.NorthAmerica);
            }}
          >
            North America
          </button>
        </div>
        <div>
          <button
            className="bg-gray-600 rounded-lg sm:w-14 hover:bg-gray-500"
            onClick={() => {
              FilterValue(FilterOptions.Oceania);
            }}
          >
            Oceania{" "}
          </button>
        </div>
        <div>
          <button
            className="bg-gray-600 rounded-lg sm:w-24 hover:bg-gray-500"
            onClick={() => {
              FilterValue(FilterOptions.SouthAmerica);
              console.log(FilterCountry);
            }}
          >
            South America
          </button>
        </div>
      </div>

      <div className={`container sm:mt-5 sm:pl-1`}>
        <div className=" grid sm:grid-cols-3 sm:gap-y-20 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 ">
          {ApiData.length > 0 ? (
            ApiData.map((value, index) => {
              return (
                <div key={index}>
                  <Card Data={value} />
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
