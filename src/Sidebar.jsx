import {React, useState } from "react";
import HomeIcon from "./Images/Home-icon.png";
import Search from "./Images/search.png";
import Detail from "./Images/detail-icon.png";
import BarOpener from "./Images/bar-opener.png";
import Profile from "./Images/profile logo.png";
import { Option1, Option2, Option3, Option4 } from "./ConstantData";

export default function Sidebar() {
  const [Sidebar, setSidebar] = useState(true);
  const [CurrentSelectedItem, setCurrentSelectedItem] = useState(null);

  const ToggleSidebar = () => {
    setSidebar(!Sidebar);
  };
  return (
    <div>
      <nav
        className={`bg-gray-300 fixed h-full rounded-lg ${
          Sidebar ? "w-36 sm:w-20 md:w-36 duration-500" : "w-20 duration-500"
        }`}
      >
        <ul className="mt-2">
          <button className="" onClick={ToggleSidebar}>
            <img className="sm:h-5 hover:bg-slate-100" src={BarOpener} />
          </button>
          
          <li
            className={` hover:bg-slate-100 rounded-md ${
              CurrentSelectedItem === Option1
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentSelectedItem(Option1);
            }}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-4 sm:px-8 ${
                  Sidebar ? "md:px-0 md:pl-2 " : "md:px-8"
                }`}
                src={HomeIcon}
                alt="home image"
              />

              <div
                className={`${
                  Sidebar ? "block sm:hidden md:block md:pl-2" : "hidden"
                }`}
              >
                All Countries
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400  mt-2  hover:bg-slate-100 rounded-md } ${
              CurrentSelectedItem === Option2
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem(Option2)}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-4 sm:px-8 ${
                  Sidebar ? " md:px-0 md:ml-1 md:pl-1" : "md:px-8"
                } `}
                src={Detail}
              />
              <div
                className={`sm:hidden ${
                  Sidebar ? "block md:block md:ml-2" : "hidden"
                }`}
              >
                Country Details
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400 mt-2  hover:bg-slate-100 rounded-md ${
              CurrentSelectedItem === Option3
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem(Option3)}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-7 sm:px-7 ${Sidebar ? "md:px-0" : "md:px-7"}`}
                src={Search}
              />
              <div
                className={`sm:hidden ${
                  Sidebar ? "md:block md:mr-2" : "hidden"
                }`}
              >
                FindNeighbours
              </div>
            </button>
          </li>

          <li
            className={`bg-gray-400 mt-2  hover:bg-slate-100 rounded-md ${
              CurrentSelectedItem === Option4
                ? "bg-gray-100"
                : "bg-gray-400"
            }`}
            onClick={() => setCurrentSelectedItem(Option4)}
          >
            <button className="flex items-center">
              <img
                className={`sm:h-7 sm:px-7 ${Sidebar ? "md:px-0" : "md:px-7"}`}
                src={Profile}
              />
              <div
                className={`sm:hidden ${
                  Sidebar ? "md:block md:mr-2" : "hidden"
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
