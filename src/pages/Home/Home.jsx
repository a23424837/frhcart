import { Input } from '@nextui-org/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { use } from 'react'
import { Button } from '@nextui-org/react'
import Product from '../../components/Product/Product'
import Loadingscreen from '../../components/Loadingscreen/Loadingscreen'




export default function Home() {

  const [isloading,setIsLoading]=useState(true)
  const [products,setproducts]=useState([])
  useEffect(()=>{
getAllproducts()
  },[])


 async function getAllproducts(){
  setIsLoading(true)
const {data}=await axios.get("https://ecommerce.routemisr.com/api/v1/products")
setproducts(data.data)
setIsLoading(false)
  }

  if(isloading){
   return <Loadingscreen/>
  }
  return (
   <div>
   
   <div className="grid md:grid-cols-4 xl:grid-col-2 gap-4">
    {

      products.map((product,index)=>{
      return (
    <Product key={index} product={product}/>
  
      )
      })
    }
   
    
   </div>
   </div>
    
  )
}
