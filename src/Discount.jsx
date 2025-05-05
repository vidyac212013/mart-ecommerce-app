import React from 'react'
import {discoutProducts} from "./data/products.js"
import './Stylings/discount.css'
import {Percent} from 'react-bootstrap-icons'
import {toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './Redux/cartSlice.js'
import { Link } from 'react-router-dom'


const Discount = () => {

  const dispatch = useDispatch();
  // const notify= ()=>toast("Product has been added to Cart")

  const product=useSelector((state)=>state.cart)
  // const count = product ? product.reduce((acc,crrVal) => acc + crrVal.qty,0) :0;
  // console.log(product)


  const handleAddToCart = (prod)=>{
    // console.log(prod)
    dispatch(addToCart(prod))
    toast.success("Product has been added to Cart")
  }

  return (
    <div className='container'>
      <div className='container-discount-head'>
        <h1>Big Discount</h1>
      </div>

      <div className="container-discount">
      <div className="row discount-device">       
          {
            discoutProducts && discoutProducts.length>0 && discoutProducts.map((discItems)=>( 
              <div className="col-lg-4 disc-col" key={discItems.id} >
                {/* <div className="card" style={{width:"25rem", padding:"20px"}}> */}
                <div className="card" style={{padding:"20px"}}>
                  <div className='disc-perc'>
                    <p>{discItems.discount}
                      {/* <i class="fa-solid fa-percent"></i> */}
                    <Percent></Percent> Off</p>                  
                  </div>

                  <div className='disc-image'>
                    <Link to={`productdetails/${discItems.id}`} >
                      {/* <img src={discItems.imgUrl} alt={discItems.description} style={{height:'200px'}}></img> */}
                      <img src={discItems.imgUrl} alt={discItems.description} ></img>
                    </Link>
                  </div>

                  <div className='disc-prod-head'>
                    <p>{discItems.productName}</p>
                  </div>

                  <div className='disc-review'>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                
                  <div className='disc-price-add-item'>

                    <div className='disc-price'>
                        <i className="fa-solid fa-dollar-sign"></i>
                        {discItems.price}
                    </div>
                    <div className='disc-item-add'>
                      <button className='btn' onClick={()=>handleAddToCart(discItems)}>
                      <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>

                  </div>
                </div>

                
              </div>


            ))
          }
        </div>

      </div>
    </div>
  )
}

export default Discount
