import React from 'react'
import Product from '../Product/Product'
import Slider from "react-slick";

export default function RelatedProduct({relatedproducts}) {

    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings} className='py-5'>
{relatedproducts.map((product,index)=>{
      
   return <Product key={index} product={product}/>
  
      
      })}
    </Slider>
   
  )
}
