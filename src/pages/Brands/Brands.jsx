import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Brands() {

const[Brands,setBrands]=useState([])

useEffect(()=>{
getAllBrands()
  },[])


async function getAllBrands(){
const {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/brands")
console.log(data.data)
setBrands(data.data)
}



  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Brands</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 border">
        {Brands.map((brand) => (
          <li key={brand._id} className="flex flex-col items-center border">
            <img 
              src={brand.image} 
              alt={brand.name} 
              className="w-100 h-100 object-cover mb-2" 
            />
            <h3 className="text-lg font-semibold text-gray">{brand.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};





