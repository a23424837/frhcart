import React from 'react';
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { addToCart } from '../../services/ServicesCart';

export default function Product({ product }) {
  return (
    <div className="flex flex-col justify-between mx-auto w-full h-30  transform overflow-hidden text-black cursor-pointer shadow-md text-center ">
      <Link to={"/product/" + product._id}>
        <img className="w-full object-contain object-center duration-300 overflow-hidden border  hover:scale-105" src={product.imageCover} alt={product.title} />
        <div className='bg-teal-600 border rounded'>
        <h2 className="mb-2 text-lg font-medium line-clamp-1">{product.title}</h2>
        <p className="mb-2 text-base line-clamp-1">{product.description}</p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold">${product.price}</p>
          <p className="text-base font-medium line-through text-gray-300">${product.price +5}</p>
          <p className="ml-auto text-base font-medium text-gray-200">20% off</p>
        </div>
      
        </div>
      </Link>
      <Button
        onPress={() => addToCart(product._id)}
        color="success"
        className="mt-1 w-full"
        
        endContent={<i className="fa-solid fa-cart-shopping text-gray-200"></i>}
      >
        Add to cart
      </Button>
    </div>
  );
}