import React from "react";
export default function Card({Data}) {
  return (
    <div >
      <div className="sm:w-36 sm:h-32">
        <div className=" border-solid border-2 border-black  sm:text-xs">
          <div className=" border-black  sm:h-auto sm:w-fit sm:text-sm ">
            <img src={Data.flags.svg} alt={Data.flags.alt} />
          </div>
          <div className="sm:text-xs">
            Name: {Data.name.common}
          </div>
          <div className="sm:text-xs">
            <p>Continent: {Data.continents}</p>
          </div>
          <div className="bg-gray-900 rounded-none mt-1 sm:h-7 hover:bg-gray-500 text-white ">
            <button className=" sm:py-1 sm:px-2 ">
              Click to See Details
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}
