import React from "react";
import { FaHome, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-around bg-neutral-800">
      <NavLink
        to="/"
        className={({ isActive }) =>
          "flex flex-col items-center justify-center p-2 " +
          (isActive ? " text-blue-400" : "text-neutral-500")
        }
      >
        <FaHome className="text-3xl " />
        <p className="text-sm font-bold">Home</p>
      </NavLink>
      <NavLink
        to="/find"
        className={({ isActive }) => {
          return (
            "flex flex-col items-center justify-center p-2 " +
            (isActive ? " text-blue-400" : "text-neutral-500")
          );
        }}
      >
        <FaSearch className="text-3xl" />
        <p className="text-sm font-bold ">Find</p>
      </NavLink>
    </div>
  );
}

export default Navbar;
