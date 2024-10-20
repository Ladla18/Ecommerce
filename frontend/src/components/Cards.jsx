import React from 'react'

const Cards = ({product}) => {
  return (
    <div className="w-1/3">
      <img src={product.image} className="w-full h-5/6 object-cover" alt="" />
      <div className='flex justify-between px-5 mt-3'>
        <h2 className='monster-light text-lg font-bold'>{product.name}</h2>
        <p className='font-bold monster-light'>$ {product.price}</p>
      </div>
      <p className='monster-light mx-5'><span className='monster-bold'>Description : </span>{product.description}</p>
    </div>
  );
}

export default Cards