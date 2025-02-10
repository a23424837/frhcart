import React, { useContext, useState } from 'react'
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import { useFormik } from 'formik';
 import * as yup from 'yup'
 import axios  from 'axios';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { authcontext } from '../../Authcontext/Authcontext';
import { useLocation } from 'react-router-dom';


export default function login() {


    const navigate=useNavigate()
    const[isloading,setisloading]=useState(false)
     const [errmessagr,seterrmessage]=useState("")
     const{SetIslogedin}=useContext(authcontext)

const initialValues={
    
    email:"",
    password:"",
    
    
    
    }
    const onSubmit= () =>{
        setisloading(true)
        console.log(values)
        const {data}= axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin",values).then((res)=>{
            console.log(res)
           
            
                localStorage.setItem("token",res.data.token)
                setisloading(true)
                navigate("/")
                 
            

        }).catch((err)=>{
            console.log(err.response.data.message)
seterrmessage(err.response.data.message)
        }).finally(()=>{
            setisloading(false)
        })
        console.log(data);
        
       
        

    }

        
    const validationSchema=yup.object({

        
        email:yup.string().required("Emaile is required"),
        password:yup.string().required("password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,"Minimum eight characters, at least one letter and one number:"),
    })

    const {handleSubmit,values, handleChange,errors,handleBlur,touched}=useFormik({
initialValues,
onSubmit,
validationSchema,
    })


  return (
    <div className="my-10">
           <form onSubmit={handleSubmit}>
           <div className='w-2/3 mx-auto grid grid-cols-2 gap-4'>
            
            <Input   onBlur={handleBlur}  onChange={handleChange}     value={values.email}   name="email" variant='borderd' className='col-span-2' label="Email"  type="email" />
            {touched.email&& errors.email  && <p>{errors.email}</p> }
            <Input  onBlur={handleBlur}   onChange={handleChange}    value={values.password} name="password" variant='borderd'className= 'col-span-2'  label="password"  type="password" />
            <Button  isLoading={isloading}   type='submit'   color="success" className='col-span-2'>
         login
       </Button>
       <p>{errmessagr}</p>
            </div>
           </form>
           </div>
  )
}
