import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const SeeProducts = () => {

    const [seeProducts, setseeProducts] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const allProducts = async ()=>{

            try {
                const response = await axios.get(
                  `http://localhost:3000/api/getproduct`
                );
                setseeProducts(response.data)
            } catch (error) {
                console.error("SeeProducts.jsx", " :: Error ❌ : ", error);
            }

        }
        allProducts();
    },[])

    const deleteProduct =async (pid)=>{
        const deleteProduct = await axios.delete(`http://localhost:3000/api/deleteproduct/${pid}`);
        setseeProducts(seeProducts.filter((product) => product.pid !== pid));
    }

    const updateProduct =async(pid)=>{
        navigate(`/updateproduct/${pid}`);
    }
  return (
    <div>
      <h1 className="text-center text-3xl monster-bold my-10">See Products</h1>

      <div className="flex gap-20 px-20 h-[400px]">
        {seeProducts.map((product) => (
          <div key={product._id} className="w-[200px] h-[300px] ">
            <img
              src={product.pimage}
              className="w-full h-10/12 object-cover"
              alt=""
            />
            <div className="flex justify-between px-5 mt-3">
              <h2 className="monster-light text-lg font-bold">
                {product.pname}
              </h2>
              <p className="font-bold monster-light">$ {product.pprice}</p>
            </div>
            <div className="flex justify-between">
              <p className="monster-light mx-5">
                <span className="monster-bold">Description : </span>
                {product.pdescription}
              </p>
              <p>QTY : {product.quantity}</p>
            </div>
            <div className="flex mt-5 justify-between">
              <button onClick={()=>updateProduct(product._id)} className="bg-yellow-500 text-black p-2 rounded-lg ">
                Update
              </button>
              <button
                onClick={() => deleteProduct(product._id)}
                className="bg-red-500 text-white p-2 rounded-lg "
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeeProducts