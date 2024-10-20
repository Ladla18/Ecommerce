import React from 'react'
import {Search  , User , ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex justify-between fixed z-50 w-full px-10 py-3">
      <div className="flex gap-6">
        <h1 className="monster-bold">Your Company Name</h1>
        <button className='monster-light'>Store</button>
        <button className='monster-light'>About</button>
        <button className='monster-light'>Contact Us</button>
      </div>
      <div className="flex gap-6">
        <Search />
        <User />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default Navbar