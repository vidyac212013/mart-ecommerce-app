import React from 'react'
import './Stylings/bestsales.css'
import { products } from './data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from './Redux/cartSlice'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const BestSales = () => {
    const sofa=products.filter((items)=>items.category==='sofa')
    const dispatch =useDispatch()
    const handleAddToCart = (prod) => {
        dispatch(addToCart(prod))
        toast.success("Product has been added to Cart")
    }
  return (
    <div className='container'>
        <div className='best-sales-head'>
            <h1>Best Sales</h1>
        </div>
        <div className="row best-sales-device">
            {
                sofa && sofa.length>0 && sofa.map((prod)=>(
                    <div className="col-lg-4 best-sale-items" key={prod.id}>
                        <div className="card p-3">
                        <div className='best-sale-items-img'> 
                            <Link to={`/productdetails/${prod.id}`}>
                            <img src={prod.imgUrl} alt={prod.productName} style={{height:'200px'}}></img>

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
                                    <button className='btn' onClick={()=>handleAddToCart(prod)} ><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default BestSales
