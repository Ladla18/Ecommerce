import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductSpec from "./components/ProductSpec";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/cartContext";
const App = () => {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:pid" element={<ProductSpec />} />
        </Routes>
      </CartProvider>
    </div>
  );
};

export default App;
