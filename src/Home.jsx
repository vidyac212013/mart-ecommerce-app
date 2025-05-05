import React from 'react'
import ProductCarousel from './CaroselComp'
import Cards from './Cards'
import Discount from './Discount'
import NewArrivalProducts from './NewArrivalProducts'
import BestSales from './BestSales'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
       <ProductCarousel />
      <Cards />
      <Discount />
      <NewArrivalProducts />
      <BestSales />
      {/* <Footer /> */}
        
    </div>
  )
}

export default Home
