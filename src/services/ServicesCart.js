import axios from "axios";
import { Bounce, toast } from "react-toastify";

  export async function addToCart(productId){
    const{data}=await axios.post("https://ecommerce.routemisr.com/api/v1/cart",{
        productId
    },{
        headers:{
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGFmYmY3ODAzZTg4OGUwNTYzZDc3OCIsIm5hbWUiOiJBaG1lZCBBYmQgQWwtTXV0aSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzMyOTY3NDE2LCJleHAiOjE3NDA3NDM0MTZ9.DF2iqgIpmEyWasg06v59Qi8TkHP6PLGNJXTROpo4CZ0"
        }
    })
console.log(data);
toast.success(data.message, {
position: "top-right",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
}