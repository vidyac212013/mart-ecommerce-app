import React from 'react'
import { products } from './data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from './Redux/cartSlice'
import './Stylings/relatedProducts.css'

import { toast } from 'react-toastify'

const RelatedProducts = ({category,id}) => {
    // console.log(category,id)
    const relProducts=products.filter((prod)=>prod.category===category && prod.id!==id)
    // console.log(relProducts)
    const dispatch=useDispatch()
    const handleAddToCart = (prod) => {
        dispatch(addToCart(prod))
        toast.success("Product has been added to Cart")
    }
  return (
    <div>
        <div className='rel-prod-head'>
            <h2>You Might Also Like</h2>            
        </div>
      <div className="container">
        <div className="row rel-product-wrap">
            {
                relProducts && relProducts.length>0 && relProducts.map((prod)=>(
                    <div className="col-lg-4">
                        <div className="card p-3 mb-5">
                            <div className='rel-prod-img'>
                                {/* <img src={prod.imgUrl} alt={prod.productName} style={{height:'250px'}}></img> */}
                                <img src={prod.imgUrl} alt={prod.productName}></img>
                            </div>
                            <div className='rel-prod-name'>
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
      </div>
    </div>
  )
}

export default RelatedProducts
