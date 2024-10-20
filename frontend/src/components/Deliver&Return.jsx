import React from 'react'

const DeliverReturn = () => {
  return (
    <div className='flex bg-slate-200 py-20 px-20'>
      <div className='w-4/6 flex flex-col me-20 '>
        <h2 className='my-5 text-3xl monster-bold'>Delivery & Returns</h2>
        <p className='monster-light text-lg'>
          To deliver your favorite products, we have partnered with the most
          reliable companies. We are ready to entrust them with your orders and
          are always on your side if something goes wrong. <br /><br /> We will be happy to
          assist you with eligible returns, the return instructions, and the
          shipping address. If you need a return or exchange, send us an email
          so we can discuss a replacement.
        </p>
      </div>
      <div className='flex justify-center items-center px-10 '>
        <h3 className='monster-light text-2xl'>Free shipping on orders of $50 or more</h3>
      </div>
    </div>
  );
}

export default DeliverReturn