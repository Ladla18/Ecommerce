import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './Pages/AddProduct'
import Navbar from './Components/Navbar'
import AdminDashboard from './Pages/AdminDashboard'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AdminDashboard/>}/>
        <Route path="/add-products" element={<AddProduct/>} />
      </Routes>
    </div>
  )
}

export default App