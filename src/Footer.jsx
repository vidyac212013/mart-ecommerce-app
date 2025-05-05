import React from 'react'
import './Stylings/martFooter.css'

const Footer = () => {
  return (
    <div className='container-fluid mart-footer'>
        <div className="row footer-device">

       
            <div className='col mart-footer-col1'>
                <div className='footer-col1-head'>
                    <h3><i className="fa-solid fa-lock"></i> Mart</h3>
                </div>
                <div className='footer-col1-para'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis dolorem, corporis cumque in facere! Pariatur eaque impedit unde sunt doloribus dolore fugiat, reprehenderit, officia repellendus, molestiae adipisci! Sapiente, at!</p>
                </div>
                <div>

                </div>
            </div>

            <div className='col mart-footer-col2'>
                <div className='footer-col2-head'>
                    <h3>About Us</h3>
                </div>
                <div className='footer-col2-list'>
                    <ul>
                        <li>Careers</li>
                        <li>Our Stores</li>
                        <li>Our Cares</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

            </div>

            <div className='col mart-footer-col3'>
                <div className='footer-col3-head'>
                    <h3>Customer Care</h3>
                </div>
                <div className='footer-col3-list'>
                    <ul>
                        <li>Help Center</li>
                        <li>How to Buy</li>
                        <li>Track Your Order</li>
                        <li>Corporate & Bulk Purchasing</li>
                        <li>Returns & Refunds </li>
                    </ul>
                </div>
            </div>

            <div className='col mart-footer-col4'>
                <div className='footer-col4-head'>
                    <h3>Contact US</h3>
                </div>
                <div className='foorer-col4-para'>
                    <p>70 Washington Square South, NewYork,NY 10012, United States</p>
                    <p>Email: example@gmail.com</p>
                    <p>Phone: +11123 456 780</p>
                </div>

            </div>
            </div>
      
    </div>
  )
}

export default Footer
