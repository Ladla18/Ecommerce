import React from "react";

const Welcome = () => {
  return (
    <div className="h-screen flex w-full z-0 top-0">
      <div className="flex flex-col justify-center px-20 w-1/2 bg-yellow-200">
        <h1 className="monster-bold text-5xl mb-5">Shop From Us Now</h1>
        <p className="monster-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque <br />
          ducimus cum. Ea quisquam modi quasi facilis, fugiat at assumenda atque <br />
          obcaecati veritatis corporis, voluptas, eaque explicabo delectus <br />
          recusandae maiores?
        </p>
        <button className="bg-black rounded-3xl text-white text-center px-3 py-2 w-2/6 monster-bold mt-5">
            Shop Now
        </button>
      </div>
      <div className="h-screen w-1/2" >
        <img src="c4M1J1Q-2000x2000.webp" className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
