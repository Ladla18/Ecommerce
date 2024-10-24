import React from 'react'
import {Search  , User , ShoppingCart } from "lucide-react";
import { useContext } from 'react';
import CartContext from '../context/cartContext';
import {Link} from "react-router-dom"
const Navbar = () => {
  const {cartCount}  = useContext(CartContext)
  return (
    <div className="flex justify-between fixed z-50 w-full px-10 py-3">
      <div className="flex gap-6">
        <h1 className="monster-bold">
          <Link to="/">Your Company Name</Link>
        </h1>
        <button className="monster-light">Store</button>
        <button className="monster-light">About</button>
        <button className="monster-light">Contact Us</button>
      </div>
      <div className="flex gap-6 relative">
        <Search />
        <User />
        <ShoppingCart /> <span className='absolute left-[107px] top-[-13px] monster-bold'> {cartCount} </span>
      </div>
    </div>
  );
}

export default Navbar