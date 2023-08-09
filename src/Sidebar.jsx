import React, { useEffect, useState } from "react";
import homeicon from "./Images/home-icon.png";
import search from "./Images/search.png";
import detail from "./Images/detail-icon.png";
import baropener from "./Images/bar-opener.png";
import profile from "./Images/profile logo.png";

export default function Sidebar() {
  const [sidebar, setsidebar] = useState(true);
  const [colour, setcolour] = useState(`bg-gray-400`);
  const [currentSelectedItem, setCurrentSelectedItem] = useState(null);
  
  const controlsidebar = () => {
    setsidebar(!sidebar);
  };
  const changecolour = () => {
    setcolour("bg-gray-600");
  };

  return (
    <div>
      <nav
        className={`bg-gray-300 fixed h-full rounded-lg ${
          sidebar ? "w-36 sm:w-20 md:w-36 duration-500" : "w-20 duration-500"
        }`}
      >
        <ul className="mt-2">
          <button className="" onClick={controlsidebar}>
            <img className="sm:h-5 hover:bg-slate-100" src={baropener} />
          </button>

          <li
            className={` hover:bg-slate-100 rounded-md ${
              currentSelectedItem == "All Countries"
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentSelectedItem("All Countries");
              console.log(currentSelectedItem);
            }}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-4 sm:px-8 ${
                  sidebar ? "md:px-0 md:pl-2 " : "md:px-8"
                }`}
                src={homeicon}
                alt="home image"
              />

              <div
                className={`${
                  sidebar ? "block sm:hidden md:block md:pl-2" : "hidden"
                }`}
              >
                All Countries
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400  mt-2  hover:bg-slate-100 rounded-md } ${
              currentSelectedItem == "CountryDetails"
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem("CountryDetails")}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-4 sm:px-8 ${
                  sidebar ? " md:px-0 md:ml-1 md:pl-1" : "md:px-8"
                } `}
                src={detail}
              />
              <div
                className={`sm:hidden ${
                  sidebar ? "block md:block md:ml-2" : "hidden"
                }`}
              >
                Country Details
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400 mt-2  hover:bg-slate-100 rounded-md ${
              currentSelectedItem == "FindNeighbours"
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem("FindNeighbours")}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-7 sm:px-7 ${sidebar ? "md:px-0" : "md:px-7"}`}
                src={search}
              />
              <div
                className={`sm:hidden ${
                  sidebar ? "md:block md:mr-2" : "hidden"
                }`}
              >
                FindNeighbours
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400 mt-2  hover:bg-slate-100 rounded-md ${
              currentSelectedItem == "PersonalInformation"
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem("PersonalInformation")}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-7 sm:px-7 ${sidebar ? "md:px-0" : "md:px-7"}`}
                src={profile}
              />
              <div
                className={`sm:hidden ${
                  sidebar ? "md:block md:mr-2" : "hidden"
                }`}
              >
                Profile
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
