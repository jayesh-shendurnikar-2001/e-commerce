import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount } from "../features/cart/cartSelectors";
import { setSearch } from "../features/cart/cartSlice";

function Header() {
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <header className="bg-emerald-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        
        {/* Top Section */}
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-white">
            <Link to="/">MyShop</Link>
          </h1>

          {/* Desktop Search */}
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search products..."
            className="hidden md:block border rounded-full px-4 py-2 w-1/3 text-center focus:outline-none"
          />

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-medium text-white">
            <li className="hover:text-black transition">
              <Link to="/">Home</Link>
            </li>

            <li className="relative hover:text-black transition">
              <Link to="/cart">
                Cart
                ({cartCount })
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="flex flex-col gap-4 mt-4 md:hidden items-center font-medium text-white">
            
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Search products..."
              className="border rounded-full px-4 py-2 w-full text-center text-black"
            />

            <Link to="/" onClick={() => setMenu(false)}>
              Home
            </Link>

            <Link to="/cart" onClick={() => setMenu(false)}>
              Cart ({cartCount})
            </Link>
          </div>
        )}

      </div>
    </header>
  );
}

export default Header;
