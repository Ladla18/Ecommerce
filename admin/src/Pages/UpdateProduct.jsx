import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const [formData, setFormData] = useState({
    pname: "",
    pdescription: "",
    pimage: "",
    pprice: "",
    quantity: "",
  });
  const param = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/getproductbyid/${param.pid}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching the product data", error);
      }
    };
    fetchProduct();
  }, [param.pid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeImage = (e) => {
    const image = e.target.files[0];
    setFormData({ ...formData, pimage: image });
  };
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    formData1.append("pname", formData.pname);
    formData1.append("pdescription", formData.pdescription);
    formData1.append("pprice", formData.pprice);
    formData1.append("pimage", formData.pimage);
    formData1.append("quantity", formData.quantity);

    try {
      const response  = await axios.put(
        `http://localhost:3000/api/update/${param.pid}`,
        formData1,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );
        console.log("Product updated successfully", response.data);
        alert("Updated Successfully");
        navigate("/")
    } catch (error) {
      console.error("Error updating the product", error);
    }
  };

  return (
    <div className="flex items-center w-full flex-col">
      <h1 className="text-3xl monster-bold my-10">Update Product</h1>

      <form className="monster-bold" onSubmit={handleSubmit}>
        <label htmlFor="pname">Product Name:</label>
        <br />
        <input
          onChange={handleChange}
          value={formData.pname}
          type="text"
          id="pname"
          name="pname"
          className="border mb-5 border-black rounded-lg"
          required
        />
        <br />
        <label htmlFor="pprice">Product Price:</label>
        <br />
        <input
          onChange={handleChange}
          value={formData.pprice}
          type="number"
          id="pprice"
          name="pprice"
          className="border mb-5 border-black rounded-lg"
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
        <label htmlFor="pimage">Product Image:</label>
        <br />
        {typeof formData.pimage === "string" ? (
          <img src={formData.pimage} width="100px" alt="Product" />
        ) : (
          <img
            src={URL.createObjectURL(formData.pimage)}
            width="100px"
            alt="Product"
          />
        )}
        <input
          onChange={handleChangeImage}
          type="file"
          id="pimage"
          className="border mb-5 border-black rounded-lg"
          name="pimage"
        />
        <br />
        <label htmlFor="pdescription">Product Description:</label>
        <br />
        <textarea
          onChange={handleChange}
          value={formData.pdescription}
          className="border border-black rounded-lg"
          id="pdescription"
          name="pdescription"
          rows="4"
          cols="50"
        ></textarea>
        <br />
        <button
          className="bg-green-600 text-white border rounded-lg px-5 py-1"
          type="submit"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
