import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='monster-bold text-lg font-bold bg-neutral-700 flex justify-start gap-20 px-10 text-white py-5 '>
        <Link to="/">
        Home
        </Link>
        <Link to='/add-products'>
        Add Products
        </Link>
        <Link to="/see-products">
        See Products
        </Link>
    </div>
  )
}

export default Navbar