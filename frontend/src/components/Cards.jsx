import React from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ product }) => {
  const navigate = useNavigate();
  const redirectProduct = (product) => {
    navigate(`/product/${product._id} `, {state : {product}});
  };
  return (
    <div
      className="w-1/3 cursor-pointer"
      onClick={() => redirectProduct(product)}
    >
      <img
        src={product.pimage}
        className="w-full h-10/12 object-cover"
        alt=""
      />
      <div className="flex justify-between px-5 mt-3">
        <h2 className="monster-light text-lg font-bold">{product.pname}</h2>
        <p className="font-bold monster-light">$ {product.pprice}</p>
      </div>
      <div className="flex justify-between">
        <p className="monster-light mx-5">
          <span className="monster-bold">Description : </span>
          {product.pdescription}
        </p>
        <p>QTY : {product.quantity}</p>
      </div>
    </div>
  );
};

export default Cards;
