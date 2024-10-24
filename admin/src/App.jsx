import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './Pages/AddProduct'
import Navbar from './Components/Navbar'
import AdminDashboard from './Pages/AdminDashboard'
import SeeProducts from './Pages/SeeProducts'
import UpdateProduct from './Pages/UpdateProduct'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/add-products" element={<AddProduct />} />
        <Route path="/see-products" element={<SeeProducts/>} />
        <Route path="/updateproduct/:pid" element={<UpdateProduct/>} />
      </Routes>
    </div>
  );
}

export default App