import {React, useState } from "react";
import HomeIcon from "./Images/home-icon.png";
import Search from "./Images/search.png";
import Detail from "./Images/detail-icon.png";
import BarOpener from "./Images/bar-opener.png";
import Profile from "./Images/profile logo.png";
import { SidebarItems } from "./ConstantData";

export default function Sidebar() {
  const [sidebarWidth, setsidebarWidth] = useState(true);
  const [CurrentSelectedItem, setCurrentSelectedItem] = useState(null);

  const ToggleSidebar = () => {
    setsidebarWidth(!sidebarWidth);
  };
  return (
    <div>
      <nav
        className={`bg-gray-300 fixed h-full rounded-lg  ${
          sidebarWidth ? " sm:w-24 md:w-28 lg:w-40 xl:w-48 2xl:w-56 duration-500" : "sm:w-20 md:w-24 lg:w-32 duration-500"
        }`}
      >
        <ul className="mt-2">
          <button className="" onClick={ToggleSidebar}>
            <img className="sm:h-5 hover:bg-slate-100" src={BarOpener} />
          </button>
          
          <li
            className={` hover:bg-slate-100 rounded-md ${
              CurrentSelectedItem === SidebarItems.ALL_COUNTRIES
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentSelectedItem(SidebarItems.ALL_COUNTRIES);
            }}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-4 sm:px-8 ${
                  sidebarWidth ? "md:px-0 md:pl-2 " : "md:px-10"
                }`}
                src={HomeIcon}
                alt="home image"
              />

              <div
                className={`${
                  sidebarWidth ? "block sm:hidden md:block md:pl-2 xl:pl-7" : "hidden"
                }`}
              >
                All Countries
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400  mt-2  hover:bg-slate-100 rounded-md } ${
              CurrentSelectedItem === SidebarItems.COUNTRY_DETAILS
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem(SidebarItems.COUNTRY_DETAILS)}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-4 sm:px-8 ${
                  sidebarWidth ? " md:px-0 md:ml-1 md:pl-1" : "md:px-10"
                } `}
                src={Detail}
              />
              <div
                className={`sm:hidden ${
                  sidebarWidth ? "block md:block md:ml-2 xl:pl-5" : "hidden"
                }`}
              >
                Country Details
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400 mt-2  hover:bg-slate-100 rounded-md ${
              CurrentSelectedItem === SidebarItems.FIND_NEIGHBOURS
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem(SidebarItems.FIND_NEIGHBOURS)}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-7 sm:px-7 ${sidebarWidth ? "md:px-0" : "md:px-9"}`}
                src={Search}
              />
              <div
                className={`sm:hidden ${
                  sidebarWidth ? "md:block md:mr-2 xl:pl-6" : "hidden"
                }`}
              >
                Find Neighbours
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400 mt-2  hover:bg-slate-100 rounded-md ${
              CurrentSelectedItem === SidebarItems.PERSONAL_INFROMATION
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem(SidebarItems.PERSONAL_INFROMATION)}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-7 sm:px-7 ${sidebarWidth ? "md:px-0" : "md:px-8"}`}
                src={Profile}
              />
              <div
                className={`sm:hidden ${
                  sidebarWidth ? "md:block md:mr-2 xl:pl-6" : "hidden"
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
