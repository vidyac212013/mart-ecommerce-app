import React from 'react'
import { useDispatch } from 'react-redux';

import { products } from './data/products'
import { addToCart } from './Redux/cartSlice';
import { toast } from 'react-toastify';
import './Stylings/filterProduct.css'

const DropDownProducts = ({categ}) => {
    console.log(categ)
    const category=categ ? categ :'sofa';
    console.log(category)
    const dispatch =useDispatch()
    const filterProducts=products.filter((product)=>product.category===category)
    
    const handleAddToCart =(prod) =>{
        dispatch(addToCart(prod))
        toast.success("Product has been added to cart")
    }
  return (
    <div className='container'>
       <div className="row  filter-product">
        {
            filterProducts && filterProducts.length>0 && filterProducts.map((prod)=>(
                <div className="col-lg-4" key={prod.id}>
                    <div className="card mb-3 p-3 ">
                        <div className='filter-product-img'>
                            <img src={prod.imgUrl}/>
                        </div>
                        <div className='disc-prod-head'>
                            <p>{prod.productName}</p>
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
                                {prod.price}
                            </div>
                            <div className='disc-item-add'>
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
  )
}

export default DropDownProducts

