import React, { useEffect, useState } from 'react'
import './Stylings/product.css'
import Sofa from './Sofa'
import { useSelector } from 'react-redux'
import { products } from './data/products'
import SearchProducts from './SearchProducts'
import DropDownProducts from './DropDownProducts'

const Product = () => {
    const [sele,setSele] =useState('')
    const [textval, setTextval] =useState('')

    const dropdownMenu= sele ? sele :'Filter By Caegory';
    const renderComponent =()=>{
        if(textval !=''){
                return <SearchProducts searchCateg={textval} />

        }
        else{
            return <DropDownProducts categ={sele} />

        }        
    }

    const handleFilterCateg = (categ) => {
        setSele(categ)
        setTextval('')
    }
    
    
  return (
    <div>
        {/* <div className='product-banner' style={{width:"100%"}}> */}
        <div className='product-banner'>

            <p>product</p>

        </div>
        <div className='product-select-category'>
                <div className="dropdown btn-dropdown">
                    <button className="btn btn-primary dropdown-toggle fs-5 pe-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {dropdownMenu}
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#" onClick={()=>handleFilterCateg('sofa')}>Sofa</a></li>
                        <li><a className="dropdown-item" href="#"  onClick={()=>handleFilterCateg('chair')}>Chair</a></li>
                        <li><a className="dropdown-item" href="#"  onClick={()=>handleFilterCateg('watch')}>Watch</a></li>
                        <li><a className="dropdown-item" href="#"  onClick={()=>handleFilterCateg('mobile')}>Mobile</a></li>
                        <li><a className="dropdown-item" href="#"  onClick={()=>handleFilterCateg('wireless')}>Wireless</a></li>
                    </ul>
                </div>
                <div className='search-container'>
                <input type='search' className='search-bar' value={textval} placeholder='Search......'
                 onChange={(e)=>setTextval(e.target.value)} />
                <button className='btn btn-icon' >
                        <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
        {renderComponent()}
        
    </div>
  )
}

export default Product
