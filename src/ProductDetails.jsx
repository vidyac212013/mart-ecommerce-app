import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/products'
import './Stylings/productDetails.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './Redux/cartSlice'
import RelatedProducts from './RelatedProducts'

import { toast } from 'react-toastify'

const ProductDetails = () => {
    const {id} =useParams()
    const dispatch=useDispatch()
    const product=products.filter((prod)=>prod.id===id)
    console.log(product)
    // console.log(id)
    const handleAddToCart= (prod)=>{
        dispatch(addToCart(prod))
        toast.success("Product has been added to cart")
    }
  return (
    <div>
        {/* <h2>Product Details</h2> */}
        <div className='banner-section' style={{height:'300px'}}>
            <p>{product[0].productName}</p>
        </div>
        <div className="container ">
                {
                    Object.keys.length > 0 ? (
                    <div className="row mt-5 pt-5 product-details-wrap">
                        <div className="col-lg-6 product-detail-img">
                            <img src={product[0].imgUrl} ></img>
                        </div>
                        <div className="col-lg-6 product-details-container">

                            <div>
                                <h1>{product[0].productName}</h1>                            
                            </div>

                            <div className='product-review'>

                                <div className='product-review-rating'>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>

                                <div className='review-rating'>
                                    <p>{product[0].reviews[0].rating} ratings</p>
                                </div>

                            </div>

                            <div className='product-details-price-container'>

                                <div className='product-details-price'>
                                    <i className="fa-solid fa-dollar-sign"></i>
                                    {product[0].price}
                                </div>

                                <div className='product-category'>
                                    <p>Category: {product[0].category}</p>
                                </div>

                            </div>

                            <div className='short-desc'>
                                <p>{product[0].shortDesc}</p>
                            </div>

                            <div className='product-count'>
                                <input type='number' style={{width:'100px'}} min="1" max={10} value='1'/>
                            </div>

                            <div className='product-detail-btn'>
                                <button type='buttton' className='btn' onClick={()=>handleAddToCart(product[0])}>Add To Cart</button>
                            </div>
                        </div>

                    </div>                       
                    ) :<p>Loading</p>
                }
        </div>
        <div className='product-details-desc'>
            <div className='product-details-head'>
                <h3>Description</h3>
                <span className='ms-5 fs-4'>Reviews (1)</span>
            </div>
            <div className='prod-deatils-para' >
            <p style={{textAlign:"left"}} className='ms-3 fs-5'>{product[0].description}</p>

            </div>

        </div>
        <RelatedProducts category={product[0].category} id={product[0].id} />
    </div>
  )
}

export default ProductDetails
