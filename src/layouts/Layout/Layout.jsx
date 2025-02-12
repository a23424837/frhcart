import React from 'react'
import Navebar from '../../components/Navebar/Navebar'
import Footer from "../../components/Footer/Footer"
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
   <>
   <Navebar/>
   
  <div className='container py-10'>
  <Outlet/>
  </div>
   <Footer/>
   
   </>
  )
}
