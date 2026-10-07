import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  const navLinkClassName = ({ isActive }) =>
    isActive
      ? "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 bg-primary/10 text-primary"
      : "relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary";

  return (
    <nav className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {/* logo */}
          <NavLink to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight transition-opacity hover:opacity-80 border-r-2 border-gray-300 pr-4 cursor-pointer">
            <div className="w-8 h-8 bg-primary  flex justify-center items-center rounded-lg text-sm text-primary-foreground shadow-sm ">
              L
            </div>
            <div className="font-bold">Logo</div>
          </NavLink>
          {/* menu */}
          <div className="flex items-center gap-4">
            <NavLink to="/" className={navLinkClassName}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClassName}>
              About
            </NavLink>
            <NavLink to="/testimoni" className={navLinkClassName}>
              Testimoni
            </NavLink>
            <NavLink to="/faq" className={navLinkClassName}>
              FAQ
            </NavLink>
          </div>
        </div>
        <div>
          <button className="rounded-lg bg-black px-3 py-2 text-sm font-medium transition-all duration-200  hover:bg-gray-700 hover:-translate-y-1 text-white">
            <NavLink to="/">Sign In</NavLink>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
