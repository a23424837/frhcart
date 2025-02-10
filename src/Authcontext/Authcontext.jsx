import axios from "axios";
import { useEffect } from "react";
import { use, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";






 export const authcontext=createContext()


export default  function AuthContextprovider({children}){

    const[isLogedin,SetIslogedin]=useState(localStorage.getItem("token")!=null)
    const navigate =useNavigate

    useEffect(()=>{
        
    },[])
        function verifyUserToken(){
            axios.get("https://ecommerce.routemisr.com/api/v1/auth/verifyToken",{
                headers:{
                    token:localStorage.getItem("token")
                }
            }).then((res)=>{
                console.log(res)
                SetIslogedin(true)
            }).catch((err)=>{
                localStorage.removeItem("token")
                console.log(err)
                SetIslogedin(false)
                navigate("/login")
            })
        }



    return <authcontext.Provider value={{isLogedin,SetIslogedin}}>

        {children}
    </authcontext.Provider>

}