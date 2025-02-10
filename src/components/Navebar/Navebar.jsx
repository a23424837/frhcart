import React, { useContext } from 'react'

import {
    Navbar as NextUiNavbar ,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Button,
    
  } from "@nextui-org/react";
  import { Link } from 'react-router-dom';
import { use } from 'react';
import { useNavigate } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { CounterContext } from '../../Contexts/Context';
import { authcontext } from '../../Authcontext/Authcontext';
import logo from '../../assets/logo.svg'
export default function Navebar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const Navigate =useNavigate()

    const{counter}=useContext(CounterContext)
    const{isLogedin,SetIslogedin}=useContext(authcontext)
    
    
  const menuItems = [
    "Home",
    "Categiores",
    "Brand",
    "cart",
  ];


  function logout(){
    localStorage.removeItem("token")
    SetIslogedin(false)
    Navigate("/login")


  }
  return (
    <NextUiNavbar shouldHideOnScroll   onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <Link to="/">
        
        <NavbarBrand>
          
        <img src={logo} alt="" />
          
        </NavbarBrand>
        
        </Link>
      </NavbarContent>
      {isLogedin&&

     <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item ,index)=>(
          <NavbarItem key={index}>
            <Link color="foreground" to={item==  menuItems[0]? "/":"/"+item}>
            
            {item}
            </Link>
          
          </NavbarItem>

        ))}
      
        
      </NavbarContent>
}

{
     isLogedin?


     <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Button  color='danger' onClick={logout} >Logout</Button>
        </NavbarItem>
        
      </NavbarContent>
      :
     <NavbarContent justify="end">
        <NavbarItem className="flex">
          <Link to={"/login"}>Login</Link>
        </NavbarItem>
        <NavbarItem>
        <Link to={"/register"}>signup</Link>
        </NavbarItem>
      </NavbarContent>
      
      
}

    { isLogedin&& <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
               "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>}
    </NextUiNavbar>
  );



}




