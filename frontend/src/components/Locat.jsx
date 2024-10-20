import React from 'react'

const Locat = () => {
  return (
    <div className="flex mt-20 h-[700px]">
      <div className="w-1/2  h-full ms-20">
        <img src="ofHOPMW-1200x1200.webp" className='h-full w-full object-cover' alt="" />
      </div>
      <div className="w-1/2 px-20">
        <h2 className='monster-bold text-4xl mt-10 mb-10'>Location</h2>
        <p className='monster-light mb-10 text-justify w-5/6 line'>
          Use this space to list your offline location(s) and alternate places
          where your goods can be purchased online or in person.
        </p>
        <h4 className='monster-bold mb-10'>Our address 5th Ave, NY, 10001, <br /> USA Get directions</h4>
        <h4 className='monster-bold'>Contact info +1-555-777-1234 <br /> email@example.com</h4>
      </div>
    </div>
  );
}

export default Locat