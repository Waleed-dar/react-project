import React from "react";
import logo from "./Images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "./App";
import { useContext } from "react";
import { AuthContext } from "./App";
export default function Navbar() {
  const {authentication , setAuthentication} = useContext(AuthContext);
  const {userInfo}=useContext(UserData)
  const navigate = useNavigate()
  return (
    <div>
      <nav className="bg-gray-600 sm:h-10 md:h-18 flex items-center justify-between px-4 sm:px-8 sticky">
        <img
          className="w-18 h-8 xs:w-4 xs:h-4  sm:w-10 sm:h-9 md:w-12 md:h-8 pt-1"
          src={logo}
          alt="Logo"
        />
        <ul className="text-white xs:space-x-3 xs:text-xs sm:space-x-5 md:space-x-6 lg:space-x-8 flex justify-end">
          <li className=" hover:text-gray-900">
            <Link to="/">Home</Link> 
          </li>
          <li className=" hover:text-gray-900">
            <a href="">Services</a>
          </li>
          <li className=" hover:text-gray-900">
            <a href="">Contact US</a>
          </li>
          <li className=" hover:text-gray-900">
            <div onClick={()=>{
              setAuthentication(false)
              localStorage.clear()
              navigate("/")
              
            }}>
              SignOut
            </div>
          </li>
          <li className=" hover:text-gray-900">
            <div className="w-16 h-7 bg-blue-300 rounded-full px-2  ">
              <span className="">{userInfo}</span>
            </div>
          </li>
         
        </ul>
      </nav>
    </div>
  );
}
