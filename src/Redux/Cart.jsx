import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../Stylings/cart.css"
import Footer from '../Footer'
import { addToCart, removeFromCart, removeItem } from './cartSlice'
import { toast } from 'react-toastify'

const Cart = () => {
    const cartProducts=useSelector((state)=>state.cart)
    const sum=cartProducts.reduce((acc,crrVal)=> acc+crrVal.total,0)
    const totPrice=sum.toFixed(2)
    
    const dispatch=useDispatch()
    const handleAddQty=(prod)=>{
        dispatch(addToCart(prod))
        toast.success("Product has been added to Cart")
    }
    const handleRemoveCart=(prod)=>{
        dispatch(removeFromCart(prod))

    }
    const handleRemoveItem = (prod) => {
        dispatch(removeItem(prod))
    }
  return (
    <div>
      {/* <h2>Cart Page</h2> */}
      <div className="container cart-container">
        <div className="row ">
            <div className="col-lg-8 cart-wrap">
                {
                    cartProducts && cartProducts.length>0 ? cartProducts.map((items)=>(
                        <div className="card cart-list" key={items.id}>
                            <div className='col-lg-4 cart-list-img'>
                                <img src={items.imgUrl} alt={items.title} style={{width:"200px"}} className='me-3'></img>
                            </div>
                            <div className='col-lg-5 cart-list-descr'>
                                <div>
                                    <h4>{items.productName}</h4>
                                </div>
                                <div className='cart-list-descr-price'>
                                    <p><i className="fa-solid fa-dollar-sign"></i>{items.price}*{items.qty}</p>     
                                    <span>
                                        <i className="fa-solid fa-dollar-sign"></i>{items.total}
                                    </span>
                                </div>
                                
                            </div>
                            <div className='col-lg-2 cart-list-btn'>
                                <div className='cart-list-close'>
                                    <button className='btn' onClick={()=>handleRemoveItem(items)}>
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                </div>
                                <div>
                                    <button className='btn' onClick={()=>handleAddQty(items)}>
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    <button className='btn' onClick={()=>handleRemoveCart(items)}>
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )) :<p className='cart-empty'>No Items are added in Cart </p>
                }
            </div>
            <div className="col-lg-4 cart-summary">
                <div className='cart-summary-head'>
                    <h4>Cart Summary</h4>
                </div>
                <div>
                    <p className='cart-summary-tot'>Total Price:</p>
                    <p className='cart-summary-price'>
                        <i className="fa-solid fa-dollar-sign"></i>{totPrice}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
