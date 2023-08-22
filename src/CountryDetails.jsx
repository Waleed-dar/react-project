import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import backButton from "./Images/backbutton.png";
export default function CountryDetails() {
  const { countryName } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);
  const [countryCurrencyKey, setCountryCurrencyKey] = useState([]);
  const [handleState, setHandleState] = useState(false);
  const [countryCurrency, setCountryCurrency] = useState(null);

  const fetchCountryDetails = async () => {
    try {
      const url = `https://restcountries.com/v3.1/name/${countryName}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    (async () => {
      setHandleState(true);
      const countryDetail = await fetchCountryDetails();
      setCountryDetails(countryDetail);
      let key = Object.keys(countryDetail[0].currencies);
      if (key.length > 1) {
        key = key[0];
        setCountryCurrency(countryDetail[0].currencies[key].name);
      } else {
        setCountryCurrency(countryDetail[0].currencies[key].name);
      }
      setHandleState(false);
    })();
  }, []);
  return (
    <div className="">
      <Link to="/AllCountries">
        <div className=" ml-0.5 mt-4 sm:h-10 sm:w-8">
          <img src={backButton} alt="backOption" />
        </div>{" "}
      </Link>
      {!countryDetails.length ? (
        <div className="">"Loading"</div>
      ) : (
        <div className=" mt-8">
          <div className="sm:w-56 sm:h-full border-black border-2 sm:ml-44 sm:mt-12 md:ml-48 lg:ml-80 xl:ml-96">
            <img
              src={countryDetails[0].flags.svg}
              alt={countryDetails[0].flags.alt}
            />{" "}
          </div>
          <div className=" sm:mt-12 sm:ml-10 text-lg  space-y-3 ">
            <div className="">Capital: {countryDetails[0].capital}</div>
            <div>Official Name: {countryDetails[0].name.official}</div>
            <div>Continent: {countryDetails[0].continents}</div>
            <div>Currency:  {countryCurrency}</div>
            <div>Goggle Map: {countryDetails[0].maps.googleMaps} </div>
          </div>
        </div>
      )}
    </div>
  );
}
