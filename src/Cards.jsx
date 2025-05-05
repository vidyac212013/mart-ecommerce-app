import React from 'react'
import './Stylings/card.css'
// import { serviceData } from './data/products'

const Cards = () => {
  return (
    <div className="container">
        {/* <div className="row"> */}
            <div className="card card-container">
                <div className="row card-device-design">

                    <div className="col card-col1">                    
                        <div className='card-circle'>
                            <i className="fa-solid fa-car"></i>
                        </div>
                        <h3>Free Shipping</h3>
                        <p className='card-para'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                    <div className="col card-col2">
                        <div className='card-circle'>
                            <i className="fa-solid fa-credit-card"></i>
                        </div>

                        <h3>Safe Payment</h3>
                        <p className='card-para'>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="col card-col3">
                        <div className='card-circle'>
                            <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <h3>Secure Payment</h3>
                        <p className='card-para'>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className="col card-col4">
                        <div className='card-circle'>
                            <i className="fa-solid fa-headphones"></i>
                        </div>
                        <h3>Back Guarantee</h3>
                        <p className='card-para'>Lorem ipsum dolor sit amet.</p>
                    </div>
                    
                </div>
            </div>
        {/* </div> */}
    </div>
    
  )
}

export default Cards
