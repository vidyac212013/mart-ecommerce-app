import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from '../Header'
import Home from '../Home'
import Cart from '../Redux/Cart'
import Product from '../Product'
import ProductDetails from '../ProductDetails'

const Routings = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/product' element={<Product />} />
        <Route path='/productdetails/:id' element={<ProductDetails />} />
    </Routes>
  )
}

export default Routings
