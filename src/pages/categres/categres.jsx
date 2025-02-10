import React, { useState } from 'react'
import { use } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
export default function categres() {

  const[category,setcategory]=useState([])
  
  useEffect(()=>{
  getAllcategries()
    },[])
  
async function getAllcategries(){
  const {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/categories")
  console.log(data.data)
  setcategory(data.data)
  }
  return (
    <div>

<div>
            <h1 className='text-2xl font-bold mb-4 text-center'>Categories</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 bold font-bold">
                {category.map((category) => (
                    <div key={category._id} className="flex flex-col items-center  ">
                        <img src={category.image} alt={category.name} className="category-image w-full h-full" />
                        <h3 className="category-name text-centet bold red">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>

    </div>
  )
}
