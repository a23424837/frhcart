
import React, { Children } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import "./App.css"
import Layout from './layouts/Layout/Layout'
import { ToastContainer } from 'react-toastify';
import {NextUIProvider} from '@nextui-org/react'
import Login from './pages/login/login'
import Register from './pages/Register/register'
import Brands from './pages/Brands/Brands'
import Categres from './pages/categres/categres'
import Carts from './pages/carts/carts'
import Notfound from './pages/notfound/notfound'
import ProtectedRoute from './Auth/protectedRoute/protectedRoute'
import Contextprovider from './Contexts/Context'
import AuthContextprovider from './Authcontext/Authcontext'
import Productdetails from './pages/productdetails/Productdetails'
import Adress from './pages/address/Adress'

 const router=  createBrowserRouter([
  {
    path: '', element:<Layout/>,children:[
      {index:true, element: <ProtectedRoute><Home/></ProtectedRoute> },
      {path:"Login", element:<Login/>},
      {path:"Register", element:<Register/>},
      {path:"Categiores", element: <ProtectedRoute><Categres/></ProtectedRoute>},
      {path:"Brand", element: <ProtectedRoute><Brands/></ProtectedRoute>},
      {path:"Cart", element:<ProtectedRoute><Carts/></ProtectedRoute>  },
      {path:"adress/:cartId", element: <ProtectedRoute><Adress/></ProtectedRoute>},
      {path:"product/:id", element:<Productdetails/>},
      {path:"*", element:<Notfound/>}
    ]
  }
])

export default function App() {
  return (
   <>
  <AuthContextprovider>
  <Contextprovider>
   <NextUIProvider>
   <RouterProvider router={router}></RouterProvider>
<ToastContainer/>
   </NextUIProvider>
   </Contextprovider>
   
  </AuthContextprovider>
  
   
   </>
  )
}
