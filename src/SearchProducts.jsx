import React from 'react'
import { products } from './data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from './Redux/cartSlice'
import { toast } from 'react-toastify'
import './Stylings/filterProduct.css'

const SearchProducts = ({searchCateg}) => {
    const searchItem= searchCateg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const dispatch = useDispatch()

    const filterProducts=products.filter((prod)=>{
            const regex=new RegExp(searchItem,'gi');
            return prod.productName.match(regex)  ||prod.category.match(regex)
    })
    const handleAddToCart = (prod) => {
        dispatch(addToCart(prod))
        toast.success("Product has been added to Cart")
    }
        // console.log(filterProducts)
  return (
    <div className='container'>
      <div className="row">
        {
            filterProducts && filterProducts.length>0 && filterProducts.map((prod)=>(
                <div className="col-lg-4" key={prod.id}>
                    <div className="card mb-3 p-3">
                        <div className='filter-product-img'>
                            <img src={prod.imgUrl} style={{height:"200px"}} />
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
                                <button className='btn' onClick={()=>handleAddToCart(prod)} >
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

export default SearchProducts
