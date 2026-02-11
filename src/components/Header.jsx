import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-emerald-300 p-4">
      {/* Top Section */}
      <div className="flex items-center justify-between md:justify-evenly">
        <h1 className="text-2xl font-bold">
          <Link to="/">MyShop</Link>
        </h1>

        <input
          width="55%"
          type="text"
          placeholder="Search Products Name.."
          className="hidden md:block border rounded-full px-4 py-1 text-center w-[15%]"
        />

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenu(!menu)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-5 font-medium">
          <li
            className=" relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-black
                after:transition-all after:duration-300
                hover:after:w-full hover:text-black"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className=" relative
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-black
                after:transition-all after:duration-300
                hover:after:w-full hover:text-black"
          >
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="flex flex-col gap-4 mt-4 md:hidden items-center font-medium">
          <input
            width="55%"
            type="text"
            placeholder="Search Products Name.."
            className="md:block border rounded-full px-4 py-1 text-center w-[75%]"
          />
          <Link to="/" onClick={() => setMenu(false)}>
            Home
          </Link>
          <Link to="/cart" onClick={() => setMenu(false)}>
            Cart
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
