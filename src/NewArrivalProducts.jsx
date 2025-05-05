import React from 'react'
import { products } from './data/products'
import './Stylings/newArrProduct.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './Redux/cartSlice'
import { Link } from 'react-router-dom'
import {toast } from 'react-toastify'



const NewArrivalProducts = () => {
const mobiles=products.filter(items=> items.category==='mobile')
const wirelessProd=products.filter((items)=>items.category==='wireless')
const dispatch = useDispatch()
const handleAddToCart = (prod) => {
    dispatch(addToCart(prod))
    toast.success('Product has been added to Cart')
}
  return (
    <div className='container'>
        <div className='new-products-head'>
            <h2>New Arrivals</h2>

        </div>
        <div className='new-products-categ-mobile'>
            <div className="row new-product-device">
                {
                    mobiles && mobiles.length>0 && mobiles.map((prod)=>(
                        <div className="col-lg-4 new-prod-col" key={prod.id}>
                            <div className="card p-3">
                            <div>                                
                                <Link to={`/productdetails/${prod.id}`}>
                                    <img src={prod.imgUrl} alt={prod.productName} style={{height:'250px'}}></img>
                                </Link>
                            </div>
                            <div className='new-prod-name'>
                                <p>{prod.productName}</p>
                            </div>
                            <div className='disc-review'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                            <div className='new-prod-add-cart'>
                                <div className='new-prod-price'>
                                    <p><i className="fa-solid fa-dollar-sign"></i>{prod.price}</p>
                                </div>
                                <div className='new-prod-btn'>
                                    <button className='btn' onClick={()=>handleAddToCart(prod)}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            </div>
                            
                        </div>
                    ))
                }
            </div>
            <div className="row"></div>
        </div>
        <div className='new-prod-categ-wireless'>
            <div className="row new-product-device-wireless">
                {
                    wirelessProd && wirelessProd.length>0 && wirelessProd.map((items)=>(
                        <div className="col-lg-4 new-prod-col"  key={items.id}>
                            <div className="card p-3">
                            <div>
                                <Link to={`/productdetails/${items.id}`} >
                                <img src={items.imgUrl} alt={items.productName} style={{height:"250px"}}></img>
                                
                                </Link>
                            </div>
                            <div className='new-prod-name'>
                                <p>{items.productName}</p>
                            </div>
                            <div className='disc-review'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>

                            </div>
                            <div className='new-prod-add-cart'>
                                <div className='new-prod-price'>
                                    <p><i className="fa-solid fa-dollar-sign"></i>{items.price}</p>
                                </div>
                                <div className='new-prod-btn'>
                                    <button className='btn' onClick={()=>handleAddToCart(items)}>
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

export default NewArrivalProducts
