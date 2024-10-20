import React from "react";

const AddProduct = () => {
  return (
    <div className="flex flex-col justify-center w-5/6">
      <h1 className="text-center text-2xl monster-bold mt-20">Add Product</h1>

      <form action="" className="monster-bold">
        <label for="name">Product Name:</label>
        <br />
        <input type="text" id="pname" name="pname" required />
        <br />
        <label for="price">Product Price:</label>
        <br />
        <input type="number" id="pprice" name="pprice" required />
        <br />
        <label for="quantity">Product Quantity:</label>
        <select name="" id="">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
        </select>
        <br />
        <label for="pimage">Product Image:</label>
        <input type="file" id="pimage" name="pimage" />
        <br />
        <label for="pimage">Product Description:</label>
        <textarea
          id="pdescription"
          name="pdescription"
          rows="4"
          cols="50
        "
        ></textarea>
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
