import React, { useState } from "react";
import axios from "axios"
const AddProduct = () => {
  const [formData, setformData] = useState({
    pname: "",
    pprice: "",
    quantity: "",
    pdescription: "",
    pimage: null,
  });
const [success,setSuccess] = useState("")
const [error,seterror] = useState("")
  const handleChange = (event) => {
    const{name, value} = event.target;

    setformData({
      ...formData,
      [name]: value,
      
    });
  };
  function handleChangeImage(e){
    setformData({
      ...formData,
      pimage : e.target.files[0]

    })
  }


  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    
    const newformData = new FormData();
    newformData.append("pname", formData.pname);
    newformData.append("pprice", formData.pprice);
    newformData.append("quantity", formData.quantity);
    newformData.append("pimage", formData.pimage);
    newformData.append("pdescription", formData.pdescription);
    
    
    try {
      const response = await axios.post(
        `http://localhost:3000/api/addproduct`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Product Added Successfully")
    } catch (error) {
        console.error("AddProduct.jsx", " :: handleChangeImage() :: Error ❌ : ", error);
        seterror("Something Went Wrong pls try again later")
    }

    
  };
  setTimeout(() => {
    setSuccess("")
  }, 3000);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-2xl monster-bold mt-20 mb-1 ">
        Add Product
      </h1>

      {success && (
        <p className="text-center bg-green-700 w-full text-white rounded-lg py-1 px-10">
          {success}
        </p>
      )}
      {error && (
        <p className="text-center bg-red-700 w-full text-white rounded-lg py-1 px-10">
          {error}
        </p>
      )}
      <form action="" onSubmit={handleSubmit} className="monster-bold ">
        <label htmlFor="name">Product Name:</label>
        <br />
        <input
          onChange={handleChange}
          value={formData.pname}
          type="text"
          id="pname"
          name="pname"
          className=" border mb-5 border-black rounded-lg"
          required
        />
        <br />
        <label onChange={handleChange} htmlFor="price">
          Product Price:
        </label>
        <br />
        <input
          onChange={handleChange}
          value={formData.pprice}
          type="number"
          id="pprice"
          name="pprice"
          className=" border mb-5 border-black rounded-lg"
          required
        />
        <br />
        <label htmlFor="quantity">Product Quantity:</label>
        <select
          onChange={handleChange}
          value={formData.quantity}
          className="border mb-5 border-black"
          name="quantity"
          id="quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <br />
        <label htmlFor="pimage">Product Image:</label> <br />
        <input
          onChange={handleChangeImage}
          type="file"
          id="pimage"
          className=" border mb-5 border-black rounded-lg"
          name="pimage"
        />
        <br />
        <label htmlFor="pimage">Product Description:</label> <br />
        <textarea
          onChange={handleChange}
          value={formData.pdescription}
          className=" border border-black rounded-lg"
          id="pdescription"
          name="pdescription"
          rows="4"
          cols="50
        "
        ></textarea>
        <br />
        <button
          className="bg-green-600 text-white border rounded-lg px-5 py-1"
          type="submit"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
