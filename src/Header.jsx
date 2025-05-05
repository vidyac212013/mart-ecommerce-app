import React from 'react'
import { Link } from 'react-router-dom'
import FontAwesomeIcon  from 'react-fontawesome';
import "../src/Assets/fontawesome-free-6.7.2-web/css/fontawesome.css"
import "../src/Assets/fontawesome-free-6.7.2-web/css/solid.css"
import { useSelector } from 'react-redux';


const Header = () => {
  const product=useSelector((state)=>state.cart)
  const count=product ? product.length : 0;
  // const count =product? product.reduce((acc,crrVal)=> acc + crrVal.qty ,0) :0;

    return (
    <div className='container-fluid wraper'>
      <nav className='nav-header'>
        <div className='logo-section'>
          <span>Mart</span>
        </div>
        <div className='nav-menu'>
          {/* <div className='hamburger-icon'>
            <i className="fa-solid fa-bars"></i>
          </div>  */}
          <div className='header-li-section'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/product">Shop</Link>
              </li>
              <li>
                <Link to="/cart">
                  Cart
                  <div className='cart-count'>{count}</div>
                </Link></li>
            </ul>
          </div>

          <div className='header-icons'>
            <ul>
              <li>
                {/* <Link> */}
                  <i className="fa-solid fa-user icon-style"></i>
                  
                {/* </Li.nk> */}
              </li>
              <li>
                  <Link to="/cart" className='nav-link'>
                  <i className="fa-solid fa-cart-shopping icon-style" ></i>
                  </Link>
                </li>
            </ul>
          </div>
          
        </div>
        <div className='react-hamburger-icon fs-3'>
          <button className='btn fs-5 pe-4' data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul className='hamburger-list dropdown-menu'>
            <li><Link to='/' className="dropdown-item">Home</Link></li>
            <li><Link to='/product' className="dropdown-item">Shop</Link></li>
            <li><Link to='/cart' className="dropdown-item">Cart</Link></li>         
            <li><a className="dropdown-item">
                <i className="fa-solid fa-user icon-style"></i>
              </a></li>         
            <li>
              <Link to='/cart' className="dropdown-item">
              <i className="fa-solid fa-cart-shopping icon-style" >({count})</i>
              </Link>
            </li>         

          </ul>
        </div>
        
      </nav>
      
     </div>
  )
}

export default Header
