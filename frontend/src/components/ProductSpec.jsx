import React from 'react'
import { useContext } from 'react';
import {useLocation} from "react-router-dom"
import CartContext from '../context/cartContext';

const ProductSpec = () => {
    const location = useLocation();
    const  {product} = location.state;
    const {addToCart}  = useContext(CartContext)

  return (
    <div className='pt-20 flex h-screen '> 
       <div className='w-[60%] flex justify-center'>
            <img src={product.pimage} className='object-cover h-[90%]' alt="" />
       </div>
       <div className='w-[40%] flex flex-col gap-5'>
            <h1 className='text-2xl monster-bold '>Product Name : {product.pname} </h1>
            <p className='text-xl monster-light'>Price : {product.pprice} </p>
            <p className='monster-bold text-2xl'>Sizes</p>
            <div>
                <button className='bg-slate-400 mx-2 px-5 py-2 rounded-sm'>S</button>
                <button className='bg-slate-400 mx-2 px-5 py-2 rounded-sm'>M</button>
                <button className='bg-slate-400 mx-2 px-5 py-2 rounded-sm'>L</button>
            </div>
            <button onClick={()=>addToCart(product)} className='bg-black text-white rounded-md text-center w-[50%] py-2'>
                Add To Bag
            </button>
            <p>
                <span className='text-xl monster-bold'>Product Details : </span> <br />
                <span className='monster-light text-lg'>
                    {product.pdescription}
                </span>
            </p>
       </div>
    </div>
  )
}

export default ProductSpec