import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import ListNeighbours from "./ListNeighbours";
export default function FindNeighbours() {
  const [formValue, setFormValue] = useState("");
  const [handleEvent, setHanldeEvent] = useState(false);
  const [data, setData] = useState([]);
  const [handleSearch, setHandleSearch] = useState(false);
  const [continentSearch, setContinentSearch] = useState();

  const showdata = async () => {
    try {
      const url = "https://restcountries.com/v3.1/all";
      const response = await fetch(url);
      const responseData = await response.json();
      let sliceData = responseData.slice(0, 20);
      return sliceData;
    } catch (error) {
      throw new Error(error);
    }
  };
  useEffect(() => {
    (async () => {
      setHanldeEvent(true);
      let countryData = await showdata();
      setData(countryData);
      setHanldeEvent(false);
    })();
  }, []);

  return (
    <div className="container">
      <form className="sm:mt-8 sm:ml-3">
        <label className="text-lg" name="countryName">
          Enter Country Name to Search:
          <input
            className="bg-gray-300 "
            name="myInput"
            type="text"
            value={formValue}
            onChange={(e) => {
              setFormValue(e.target.value);
            }}
          />
        </label>
        <button
          onClick={(e) => {
            setHandleSearch(true);
            e.preventDefault();
          }}
          className="sm:h-8 bg-blue-500 hover:bg-blue-600 text-white"
        >
          Search
        </button>
      </form>
      <h1>Search Results</h1>
      <div className="flex flex-col  space-x-6  sm:grid-cols-3">
        {formValue.length && handleSearch
          ? data.map((value, index) => {
              {
                const continentName = value.continents;
                const countryName = value.name.common;
                if (countryName.includes(formValue)) {
                  return (
                    <>
                      <div key={index} className="flex flex-col mt-4 sm:flex">
                        <br />
                        <Card data={value} />
                        <div className="sm:mt-0">
                          <ListNeighbours
                            continents={continentName}
                            data={data} value={value}
                          />
                        </div>
                      </div>
                    </>
                  );
                }
              }
            })
          : "Nothing To Show"}
      </div>
    </div>
  );
}
