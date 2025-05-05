import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import {SliderData} from "./data/products.js";
// import styled from 'styled-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const CarouselWraper=styled.div`
   
// `;
// const ImageWraper=styled.div`

// `

function ProductCarousel() {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        // display:'flex',
        // responsive:[
        //   {
        //     breakpoint: 767,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1,
        //         initialSlide: 1
        //     }
        // }
        // ]
      };
    // console.log(SliderData)
  return (
    <div className="container">

    <Slider {...settings}>
    {
       SliderData && SliderData.length>0 && SliderData.map((items)=>(
            <div className='row slider'>
                <div className="col-5 slider-div-desc" >
                    <h1>{items.title}</h1>
                    <p>{items.desc}</p>
                    <button className='btn slider-btn'>Visit Collections</button>
                </div>
                <div className="col-1"></div>
                <div className="col-2 slider-div-img">
                    <img src={items.cover} style={{height:'350px'}}></img>
                </div>
            </div>
        ))
    }
        
    
        
    </Slider>
    </div>


    // <CarouselWraper className='product-carousel'><Carousel data-bs-theme="dark">
    //     {
    //         SliderData?.map((item) => (
      
    //     <Carousel.Item>
    //         <ImageWraper>
    //         <img
    //             className="d-block w-300"
                
    //             src={item?.cover}
    //             alt="First slide"
    //         /></ImageWraper>
    //         <Carousel.Caption>
    //             <h5>{item?.title}</h5>
    //             <p>{item?.desc}</p>
    //         </Carousel.Caption>            
    //   </Carousel.Item>

    //         )
    //     )}     
    // </Carousel></CarouselWraper>
  );
}

export default ProductCarousel;
