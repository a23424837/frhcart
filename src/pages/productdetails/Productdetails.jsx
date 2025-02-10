import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loadingscreen from '../../components/Loadingscreen/Loadingscreen';
import Slider from "react-slick";
import Product from '../../components/Product/Product';
import RelatedProduct from '../../components/RelatedProduct/RelatedProduct';
import { addToCart } from '../../services/ServicesCart';

export default function Productdetails() {
    let { id } = useParams();
    const [productdet, setProductdet] = useState(null);
    const[isloading,setIsLoading]=useState(true)
    const[relatedproducts,setRelatedproducts]=useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    useEffect(() => {
        getAllproductdetails();
    }, []);

    async function getAllproductdetails() {
        setIsLoading(true)
        try {
            const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/products/" + id);
            setProductdet(data.data);
            getRealatedProducts(data.data.category._id)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    }
    async function getRealatedProducts(categoryId){
        const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`)
        setRelatedproducts(data.data)
    }

    if (!productdet) {
        return <Loadingscreen/>
    }

    return (
        <div className="mx-auto ">
            <div className="flex flex-col items-center md:flex-row" id='divflex'> 
                {/* Product Image */}
                <div className="md:w-1/3 p-4 relative">
                
    <Slider {...settings} className='py-5'>
      {
        productdet?.images.map((img)=>{
            return<img src={img} alt={productdet.title} className="w-full h-auto object-cover rounded-lg" />
                    
        })
      }
    </Slider>


                    
                    <button className="absolute top-2 right-2 text-red-500 hover:text-red-600 focus:outline-none">
                        {/* SVG icon for close button */}
                    </button>
                </div>

                {/* Product Details */}
                <div className="md:w-2/3 p-6">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">{productdet.title}</h1>
                    <p className="text-sm text-gray-600 mb-4">{productdet.description}</p>
                    
                    {/* Ratings */}
                    <div className="flex items-center mb-4">
                        <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">{productdet.ratingsAverage} ★</span>
                        <span className="text-sm text-gray-500 ml-2">{productdet.ratingsQuantity} reviews</span>
                    </div>

                    {/* Product Features */}
                    <ul className="text-sm text-gray-700 mb-6">
                        {/* Add other product features here */}
                    </ul>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-bold text-gray-900">${productdet.price}</span>
                        {/* Add discount price if available */}
                    </div>
                    
                    <p className="text-green-600 text-sm font-semibold mb-4">Free Delivery</p>
                    
                    <div className="flex space-x-4">
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                            Buy Now
                        </button>
                        <button  onClick={()=>addToCart(productdet?._id)}  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
           <RelatedProduct relatedproducts={relatedproducts}></RelatedProduct>
        </div>
    );
}