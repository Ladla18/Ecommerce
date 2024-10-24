import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import Cards from "../components/Cards";
import Aboutus from "../components/Aboutus";
import Testimonials from "../components/Testimonials";
import DeliverReturn from "../components/Deliver&Return";
import Locat from "../components/Locat";
import Footer from "../components/Footer";
import axios from "axios";
const Home = () => {
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/getproduct`
        );
        setProductDetail(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Home.jsx", " :: Error ❌ : ", error);
      }
    };
    fetchProduct();
  }, []);
  return (
    <div>
 
      <Welcome />
      {/* Product Seciton */}
      <div className="mx-20 mb-20">
        <h2 className="text-5xl text-center monster-bold mt-10">
          Best Sellers
        </h2>
        <div className="flex gap-10 mt-20 justify-center">
          {productDetail.map((pd) => (
            <Cards key={pd._id} product={pd} />
          ))}
        </div>
      </div>
          
      {/* About Us */}
      <Aboutus />

      {/* Testimonials */}
      <Testimonials />

      <DeliverReturn />
      <Locat />
      <Footer />
    </div>
  );
};

export default Home;
